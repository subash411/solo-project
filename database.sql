
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL, 
);

CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR(255),
	"url" VARCHAR(600) NOT NULL,
	"description" VARCHAR(255) NOT NULL,
	"likes" INTEGER DEFAULT 0
);
INSERT INTO "gallery"
("title", "url", "description")
VALUES
('The Giant of Boston', 'https://www.rosekennedygreenway.org/wp-content/uploads/2019/09/8dbf76e0cbcb5ef33e0f2f0abddd8cfd_f657.jpg', 'Created by Os Gemeos, in Boston USA'),
('The Lennon Wall', 'https://th-thumbnailer.cdn-si-edu.com/i86QjxUskPgCBvaR-UjpFA1ojJ4=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/5a/955a8d7a-b41e-46c4-93eb-822a06e24bd4/29184872911_4d8cc7373a_k.jpg', 'Created by various artists, in Prague Czechia'),
('Flower Thrower', 'https://www.researchgate.net/profile/Pablo-Gutierrez-4/publication/344932931/figure/fig2/AS:951640483983363@1603900180557/Rage-the-Flower-Thrower-Bansky-2005-Wall-between-Israel-and-Palestine.png', 'Created by Banksy, in Jerusalem Israel'),
('Stay Safe', 'https://streetartutopia.com/wp-content/uploads/2021/10/STAY-SAFE-by-Rasmus-Balstrom-with-the-help-of-Atlasgraffiti-and-nikoteee-in-Los-Angeles-California-USA-5.jpg', 'Created by Rasmus Balstrom, in LA USA'),
('Portrait of David', 'https://www1.insh.world/wp-content/uploads/sites/28/2018/10/22-1.jpg', 'Created by Eduardo Kobra, in Carrara Italy'),
('Graffit Art on Containers', 'https://bsciwp.s3.amazonaws.com/wp-content/uploads/2017/10/22104621/PichiAvo-North-West-Walls14-Belgium.jpg', 'Created by Pichi and Avo, in Belgium'),
('Dont Shoot', 'https://www.collater.al/wp-content/uploads/2019/02/Bambi-e-la-sua-street-art-ironica-e-pungente-Collater.al-8-1024x768.jpg', 'Created by Bambi, in London England'),
('Disaster', 'https://i.pinimg.com/736x/96/30/e3/9630e3ad0a64d0630d1f9f662d0588ad--dumbo-graffiti-artwork.jpg', 'Created by anonymous, in NYC USA'),
('Elmac and Retna', 'https://live.staticflickr.com/189/441174957_6f0452d2f2_b.jpg', 'Created by Marquis Lewis, in Los Angeles USA'),
('Street Mural', 'https://i.pinimg.com/originals/04/d9/78/04d97800efbb35f3758b0c27ed7ca617.jpg', 'Created by anonymous, in Chiado Lisbon');
