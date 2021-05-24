CREATE TABLE task(
                     taskId binary(16) NOT NULL,
                     taskDescription VARCHAR(256),
                     taskDueDate  DATETIME,
                     taskPriority VARCHAR(64) NOT NULL,
                     taskStartDate DATETIME,
                     taskStatus VARCHAR(64) NOT NULL,
                     taskTitle VARCHAR(255) NOT NULL,
                     PRIMARY KEY(taskId)
);

INSERT INTO task(taskId, taskDescription, taskDueDate, taskPriority, taskStartDate, taskStatus, taskTitle) VALUES (UUID_TO_BIN("0abfbf26-bca6-11eb-8529-0242ac130003"), "The most important ticket", NOW(), "super important", NOW(), "in progress", "Super Secret");

SELECT taskId, taskDescription, taskDueDate, taskPriority, taskStartDate, taskStatus, taskTitle from task WHERE taskId = "0abfbf26-bca6-11eb-8529-0242ac130003";