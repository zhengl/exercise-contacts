-- Schema creation
DROP TABLE IF EXISTS ContactDetail;
DROP TABLE IF EXISTS Contact;
DROP PROCEDURE IF EXISTS DataFilling;
CREATE TABLE Contact (
    UserID INT PRIMARY KEY,
    Title NVARCHAR(5) NULL,
    Name NVARCHAR(200) NOT NULL,
    BirthDate DATETIME NOT NULL,
    IsFavorite INT NULL
);

CREATE TABLE ContactDetail(
    UserID int NOT NULL,
    ContactDetailType nvarchar(20) NOT NULL,
    ContactDetailContent nvarchar(200) NOT NULL
);

-- data generation - may take a while to fill the tables
CREATE PROCEDURE DataFilling()
BEGIN
  -- create 10k users
  DECLARE counter INT DEFAULT 1;
    DECLARE detailsCounter INT DEFAULT 1;
  DECLARE baseBirthDate DATETIME DEFAULT '1970-01-01';

    WHILE counter <= 10000 DO
    INSERT INTO Contact(UserID,Title,Name,BirthDate,IsFavorite)
        VALUES (
      counter,  -- ID
      CASE WHEN counter % 2 = 0  THEN 'MR' ELSE 'MRS' END, -- title
      Concat('User ',CAST(counter as char(10))), -- name
      DATE_ADD(baseBirthDate, INTERVAL (CAST(RAND() * 500 AS UNSIGNED) + 1) MONTH),
      case when counter % 3 = 0  THEN 1 ELSE 0 END -- favorite
    );

        -- add some contact details
        SET detailsCounter = 1;
    WHILE detailsCounter <= 5 DO
      INSERT INTO ContactDetail(UserID, ContactDetailType, ContactDetailContent)
            VALUES (
        counter,
        CASE WHEN counter%2=0 THEN 'Phone' ELSE 'EMAIL' END,
                CASE WHEN counter%2=0 THEN CONCAT('000 123 45',counter) ELSE CONCAT('user',counter,'@mail.com') END
      );

      SET detailsCounter = detailsCounter + 1;
        END WHILE;
    SET counter = counter + 1;
  END WHILE;
END;

CALL DataFilling();

-- incremental scripts to improve performance
ALTER TABLE ContactDetail
ADD CONSTRAINT FK_contact_detail_map
FOREIGN KEY (UserID) REFERENCES Contact(UserID)
ON DELETE CASCADE;
