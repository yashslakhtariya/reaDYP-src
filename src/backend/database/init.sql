CREATE TABLE if not exists users (
     username text not null,
     password text not null
);

CREATE TABLE if not exists wishlist (
     username text NOT NULL,
     title text NOT NULL,
     authors text NOT NULL,
     infoLink text NOT NULL,
     imageLink text NOT NULL
);