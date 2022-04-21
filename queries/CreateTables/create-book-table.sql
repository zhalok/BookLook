use bqlz2crijfharfe0jjuo;

create table books(

id int NOT NULL AUTO_INCREMENT primary key,
name varchar(256) not null,
publication varchar(256) not null,
author varchar(256) not null,
edition varchar(10) ,
availibility boolean not null,
reviews int not null,
uploader varchar(256) not null,
upload_time date not null,



)

-- -- drop table books;
-- drop table books;