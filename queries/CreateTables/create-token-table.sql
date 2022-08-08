-- use bqlz2crijfharfe0jjuo;

create table tokens(
    userId int not null,
    token varchar(256) not null,
    expiration_time int(10) unsigned not null
)