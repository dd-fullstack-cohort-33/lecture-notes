# Conceptual Model
## Entities and Attributes
### Profile
* profileId (pk)
* profileActivationToken
* profileAbout  
* profileDepartment  
* profileEmail
* profileFullName  
* profileHash
* profilePronouns
* profileRole

### Project
* projectId (pk)
* projectDescription
* projectDueDate
* projectIsPrivate
* projectName

### Field
* fieldId (fk)
* fieldProjectId(fk)
* fieldInputType
* fieldOptions(json)

### Task
* taskId (pk)
* taskProfileId (fk)
* taskProjectId (fk)
* taskDescription
* taskDueDate



### Subtask
* subtaskId (pk)
* subtaskProfileId (fk)
* subtaskTaskId (fk)
* subtaskDescription
* subtaskDueDate




### ProfileProject
* profileProjectProfileId (pk, flk)
* ProfileProjectProjectId (pk, flk)
* ProfileProjectIsOwner
* profileProjectPermissions 


## Relationships
* many profiles can be a part of many projects
* 1 project can have many fields
* 1 project can have many tasks
* 1 profile can have many tasks
* 1 task can have many subtasks
* 1 profile can have many subtasks
* 1 project can have many subtasks
  









