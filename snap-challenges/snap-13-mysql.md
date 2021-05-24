# Snap Challenge: MySQL

1. Write a create table statement for this table. The table is named Task.

        +-----------------+--------------+------+-----+---------+-------+
        | Field           | Type         | Null | Key | Default | Extra |
        +-----------------+--------------+------+-----+---------+-------+
        | taskId          | binary(16)   | NO   | PRI | NULL    |       |
        | taskTitle       | varchar(255) | NO   |     | NULL    |       |
        | taskStartDate   | datetime     | YES  |     | NULL    |       |
        | taskDueDate     | datetime     | YES  |     | NULL    |       |
        | taskStatus      | varchar(64)  | NO   |     | NULL    |       |
        | taskPriority    | varchar(64)  | NO   |     | NULL    |       |
        | taskDescription | varchar(256) | YES  |     | NULL    |       |
        +-----------------+--------------+------+-----+---------+-------+

   (Hint: you can use the `desc` command to check your work)

2. For the DDL created in the previous question write  a SQL SELECT statement that gets me the following information for the task with the Uuid `0536faef082b454e9d444cdbe7887d7a`.
   * taskId
   * taskDescription
   * taskDueDate
   * taskStartDate  
   * taskStatus  
   * taskTitle
