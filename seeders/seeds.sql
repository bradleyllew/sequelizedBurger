ALTER TABLE Burgers MODIFY createdAt VARCHAR(255) DEFAULT NULL;
ALTER TABLE Burgers MODIFY updatedAt VARCHAR(255) DEFAULT NULL;
ALTER TABLE Customer MODIFY createdAt VARCHAR(255) DEFAULT NULL;
ALTER TABLE Customer MODIFY updatedAt VARCHAR(255) DEFAULT NULL;
INSERT INTO burgers (burger_name) VALUES ('Bradley Bean Burger');
INSERT INTO burgers (burger_name) VALUES ('Beyond Burger');
INSERT INTO burgers (burger_name) VALUES ('Impossible Burger');