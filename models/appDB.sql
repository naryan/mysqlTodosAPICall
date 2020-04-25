drop database if exists todosDB;

create database todosDB;

use todosDB;

create table todos(
    id int(4) AUTO_INCREMENT not null,
    note text(100) not null,
    completed boolean default false,
    primary key (id)
);
