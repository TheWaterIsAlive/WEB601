use nelsonfoods;



DROP TABLE IF EXISTS menuItem;
DROP TABLE IF EXISTS menuDefaults;
DROP TABLE IF EXISTS menu;
DROP TABLE IF EXISTS calanderEntery;
DROP TABLE IF EXISTS calander;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS bussnesses;


create table bussnesses(bussnessName varchar(60) primary key NOT NULL, address varchar(200));


create table users(username varchar(100) primary key not null,
 accountPassword varchar(255) not null, email varchar(60) not null,
 bussnessName varchar(60), FOREIGN KEY (bussnessName) REFERENCES bussnesses(bussnessName));
 

create table calander(calanderID int primary key NOT NULL AUTO_INCREMENT,  bussnessName varchar(60) not null, 
FOREIGN KEY (bussnessName) REFERENCES bussnesses(bussnessName));


create table calanderEntery(entryID int primary key NOT NULL AUTO_INCREMENT,  entryDate varchar(30) not null, entryTime time not null, calanderID int not null, 
FOREIGN KEY (calanderID) REFERENCES calander(calanderID));


create table menu(menuID int primary key NOT NULL AUTO_INCREMENT, bussnessName varchar(60) not null, 
FOREIGN KEY (bussnessName) REFERENCES bussnesses(bussnessName));



create table menuDefaults(defaultID int primary key NOT NULL AUTO_INCREMENT,  bussnessName varchar(60) not null,
 energy bit not null, protein bit not null, fat bit not null, carbohydrates bit not null, sugar bit not null,
 dietaryFibre bit not null, sodium bit not null, vegaterian bit not null, vegan bit not null, allergenCondentions bit not null,
FOREIGN KEY (bussnessName) REFERENCES bussnesses(bussnessName));

create table menuItem(itemID int primary key NOT NULL AUTO_INCREMENT, menuID int not null, itemName varchar(60) not null, itemDescription varchar(200), 
itemCost int, energy int, protein int, fat int, carbohydrates int, sugar int,
 dietaryFibre int, sodium int, allergenCondentions varchar(200), defaultID int, image varchar(255),
FOREIGN KEY (menuID) REFERENCES menu(menuID), FOREIGN KEY (defaultID) REFERENCES menuDefaults(defaultID));

insert into bussnesses (bussnessName, address)
		values('Chokdee', '109 High Street, Motueka, New Zealand'), ('Place1', '1 High Street, Motueka, New Zealand'), ('Place2', '2 High Street, Motueka, New Zealand');

insert into users (userName, accountPassword, email, bussnessName)
		values('AllanFry', 'Password1', 'ajfry203@gmail.com','Chokdee'),('JohnJohn', 'Password1', 'john@gmail.com','Place1'),('Pete', 'Password1', 'Pet@gmail.com','Place2');





insert into calander (bussnessName)
		values('Chokdee');
        
insert into calanderEntery(entryDate, entryTime, calanderID)
values('Monday', '5:00', 1),('Tuesday', '5:00', 1),('Wednesday', '5:00', 1),('Thursday', '5:00', 1),('Friday', '5:00', 1);

insert into menu(bussnessname)
values('Chokdee'), ('Place1'), ('Place2');


insert into menuItem(menuID, itemName, itemDescription, itemCost, image)
values('1', 'Baked Potato', 'A baked potato,
 or jacket potato, is a potato that has been
 baked for eating. When well cooked, a baked
 potato has a fluffy interior and a crisp skin.', '7'
 ,'https://lh3.googleusercontent.com/B_NUq625isJ64CSTei3uiNJybFkQtrqN7fd0V_KfCNkDxm3I82m4e2S-IA03PnRabHUoo5PyxV5EaHZUT4pgtbFHn1RPzXjiCGsysVquP3fk_X9josdZQRN_pTrBGlecvXYOU4rlCw=w1400'),
 ('1', 'Beans', 'A bean is a seed of one of several genera of the flowering plant family Fabaceae, which are used for human or animal food.', '3'
 ,'https://lh3.googleusercontent.com/kiHD4Rr8c82nmTM-jpbJMF1HbNxMPD4-i0XwpeJPmLAbT3uCN__JoUJkV_maN-r8Yl7decWqQOz2CoaZevi_CYyatrkoVii2yBK-7XJFLTkbu8F1T5nblbIlPhCZ_aJ2g0zxE5wSYQ=w1400');


select * from bussnesses;
select * from users;
select * from calander;
select * from calanderEntery;
select * from menu;
select * from menuItem;
select * from menuDefaults;
