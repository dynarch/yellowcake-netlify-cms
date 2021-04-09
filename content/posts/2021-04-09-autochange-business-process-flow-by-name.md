---
template: SinglePost
title: Autochange business process flow by name
status: Published
date: 2021-04-09
excerpt: "This article is an extension of an article Business Process Flows:
  Programmatically Switch BPF in Dynamics 365 using JavaScript from
  a  PowerObjects blog."
categories:
  - category: News
meta:
  title: Autochange business process flow by name
  description: "Autochange business process flow by name with PowerApps Typescript "
---
This article is an extension of an *[article Business Process Flows: Programmatically Switch BPF in Dynamics 365 using JavaScript](https://www.powerobjects.com/blog/2019/04/24/business-process-flows-switch-bpf-dynamics-365-javascript/)* *from a [PowerObjects blog](https://www.powerobjects.com/blog).*

If you are using code with hardcoded process ID values on the sames web site this is not a problem. The problem arises as soon as you will try to deploy your customizations on another Dynamics 365 Common Data Service or CRM instance. In this case business process will be imported with new IDs and you need to manually update their values.

In case of multiple instances or continuous integration this can be annoying.

To avoid a problem, businees process flow's (BPF) names can be used instead.

In my example I assume that there are 2 activated processes with names <**Process 1 name**> and <**Process 2 name**>.

A main form entity contains an attribute **RequestType.** Depending on its value processes should be switched.

*Here is an example of a TypeScript class that performs this action*

```javascript
/// <reference path="../lib/@types/xrm/index.d.ts" />
'use strict';

namespace BpfUtil {

    //main entry point
    export function processOnLoad(executionContext: Xrm.Page.EventContext): void {
        var formHandler = new FormHandler(executionContext.getFormContext());

        formHandler.changeProcessByRequestType();
    }

    export class FormHandler {

        formContext: Xrm.FormContext;

        constructor(_formContext: Xrm.FormContext) {
            this.formContext = _formContext;
        }

        // changes BPF according to attribute new_requestType value
        changeProcessByRequestType(): void {

            var process1Id: string;// = GUID 1;
            var process2Id: string;// = GUID 2;

            this.formContext.data.process.getEnabledProcesses(
                (enabledProcesses: Xrm.ProcessFlow.ProcessDictionary): void => {
                    for (var processId in enabledProcesses) {
                        if ((enabledProcesses[processId]).localeCompare("<Process 1 name>") === 0) {
                            process1Id = processId;
                        }
                        else if ((enabledProcesses[processId]).localeCompare("<Process 2 name>") === 0) {
                            process2Id = processId;
                        }
                    }
                    if (process1Id === null || process2Id.length === 0) {
                        Xrm.Navigation.openErrorDialog({ message: "Process 1 Id not found" });
                    }
                    else if (process2Id === null || process2Id.length === 0) {
                        Xrm.Navigation.openErrorDialog({ message: "Process 2 Id not found" });
                    }
                    else {
                        this.switchProcess(process1Id, process2Id);
                    }
                }
            )
        }

        private switchProcess(process1Id: string, process2Id: string): void {
            var requestType1 = 119240000;
            var requestType2 = 119240001;
            var requestTypeAttribute = this.formContext.getAttribute('new_requesttype');
            if (requestTypeAttribute === null || typeof requestTypeAttribute === 'undefined')
            {
                Xrm.Navigation.openErrorDialog({ message: "Attribute Request Type not found" });
                return;
            }
            var requestType = requestTypeAttribute.getValue();

            if (requestType !== null) {
                var activeProcessID = this.formContext.data.process.getActiveProcess().getId();

                if (requestType === requestType1 && activeProcessID.toUpperCase() !== process1Id) {
                    this.formContext.data.process.setActiveProcess(process1Id);
                }
                else if (requestType === requestType2 && activeProcessID.toUpperCase() !== process2Id) {
                    this.formContext.data.process.setActiveProcess(process2Id);
                }
            }
            else {
                Xrm.Navigation.openErrorDialog({ message: "Attribute Request Type not found" });
            }
        }
    }
}
```

Entry point is a function processOnLoad, it should be added to a form's **onLoad** event handler.

In a function **changeProcessByRequestType** will be searched in active processes for IDs of a processes with given names <Process 1 name> and <Process 2 name>.

If they are found their IDs will be transfered to a function **switchProcess.** In this function will be checked whether process corresponds to a value of a RequestType attribute.

JavaScript generated code:

```javascript
/// <reference path="../lib/@types/xrm/index.d.ts" />
'use strict';
var BpfUtil;
(function (BpfUtil) {
    //main entry point
    function processOnLoad(executionContext) {
        var formHandler = new FormHandler(executionContext.getFormContext());
        formHandler.changeProcessByRequestType();
    }
    BpfUtil.processOnLoad = processOnLoad;
    var FormHandler = /** @class */ (function () {
        function FormHandler(_formContext) {
            this.formContext = _formContext;
        }
        // changes BPF according to attribute new_requestType value
        FormHandler.prototype.changeProcessByRequestType = function () {
            var _this = this;
            var process1Id; // = GUID 1;
            var process2Id; // = GUID 2;
            this.formContext.data.process.getEnabledProcesses(function (enabledProcesses) {
                for (var processId in enabledProcesses) {
                    if ((enabledProcesses[processId]).localeCompare("<Process 1 name>") === 0) {
                        process1Id = processId;
                    }
                    else if ((enabledProcesses[processId]).localeCompare("<Process 2 name>") === 0) {
                        process2Id = processId;
                    }
                }
                if (process1Id === null || process2Id.length === 0) {
                    Xrm.Navigation.openErrorDialog({ message: "Process 1 Id not found" });
                }
                else if (process2Id === null || process2Id.length === 0) {
                    Xrm.Navigation.openErrorDialog({ message: "Process 2 Id not found" });
                }
                else {
                    _this.switchProcess(process1Id, process2Id);
                }
            });
        };
        FormHandler.prototype.switchProcess = function (process1Id, process2Id) {
            var requestType1 = 119240000;
            var requestType2 = 119240001;
            var requestTypeAttribute = this.formContext.getAttribute('new_requesttype');
            if (requestTypeAttribute === null || typeof requestTypeAttribute === 'undefined') {
                Xrm.Navigation.openErrorDialog({ message: "Attribute Request Type not found" });
                return;
            }
            var requestType = requestTypeAttribute.getValue();
            if (requestType !== null) {
                var activeProcessID = this.formContext.data.process.getActiveProcess().getId();
                if (requestType === requestType1 && activeProcessID.toUpperCase() !== process1Id) {
                    this.formContext.data.process.setActiveProcess(process1Id);
                }
                else if (requestType === requestType2 && activeProcessID.toUpperCase() !== process2Id) {
                    this.formContext.data.process.setActiveProcess(process2Id);
                }
            }
            else {
                Xrm.Navigation.openErrorDialog({ message: "Attribute Request Type not found" });
            }
        };
        return FormHandler;
    }());
    BpfUtil.FormHandler = FormHandler;
})(BpfUtil || (BpfUtil = {}));
//# sourceMappingURL=BpfSwitcher.js.map
```

In a code there are hardcoded values of a process names, they will not be changed while transferring to another environment. Thus you can avoid problem with deployment.