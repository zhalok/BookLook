CREATE TABLE student (
  Reg_no INT PRIMARY KEY,
  Name VARCHAR(30),
  Dept CHAR(3),
  CGPA FLOAT
);


INSERT INTO student VALUES (001, 'zhalok', "CSE", 3.25);
INSERT INTO student VALUES (002, 'polok', "FET", 3.8);
INSERT INTO student VALUES (003, 'Rabi', "SWE", 3.7);
INSERT INTO student VALUES (004, 'Abdul Kader', "CSE", 3.5);
INSERT INTO student VALUES (005, 'Ryhan', "EEE", 3.7);
INSERT INTO student VALUES (123, 'Sohan', "CSE", 3.6);


select * from student where CGPA in (select max(CGPA) from student where CGPA<( select max(CGPA) from student ) ); 

select * from student where CGPA in ( select max(CGPA) from student where CGPA < (select max(CGPA) from student where Dept = 'CSE') );



create table student1 like student;

alter table student1 add unique(Dept);

insert ignore into student1 select * from student order by Dept;

rename table student to backup_student, student1 to student;
delete from backup_student;
select * from student;


-- -- 4
select * from student
where Name like '%tu';
-- -- 5
select * from student
where Name like "P__%";
-- -- 6
select * from student
where lower(Name) like "%on%";
