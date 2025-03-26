DROP DATABASE IF EXISTS to_do_list;
CREATE DATABASE to_do_list;

USE to_do_list;

DROP TABLE IF EXISTS todo;
DROP TABLE IF EXISTS done;
 

CREATE TABLE todo (
    id              INT             NOT NULL AUTO_INCREMENT,
    id_task         INT             NOT NULL,
    title           VARCHAR(225)    NOT NULL,
    task_text       VARCHAR(225)    NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE done (
    id              INT             NOT NULL AUTO_INCREMENT,
    id_task         INT             NOT NULL,
    title           VARCHAR(225)    NOT NULL,
    task_text       VARCHAR(225)    NOT NULL,
    PRIMARY KEY (id)
);