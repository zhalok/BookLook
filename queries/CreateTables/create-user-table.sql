-- use bqlz2crijfharfe0jjuo;

create table users(

id int not null AUTO_INCREMENT primary key,
name varchar(256) not null,
email varchar(256) not null,
hashed_password varchar(256) not null,
verified boolean not null

)