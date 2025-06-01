-- Active: 1748786378932@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

INSERT INTO
    users (
        id,
        name,
        email,
        password,
        role
    )
VALUES -- tipo NORMAL e senha = fulano123
    (
        'u001',
        'Fulano',
        'fulano@email.com',
        '$2a$12$qPQj5Lm1dQK2auALLTC0dOWedtr/Th.aSFf3.pdK5jCmYelFrYadC',
        'NORMAL'
    ), -- tipo NORMAL e senha = beltrana00
(
    'u002',
    'Beltrana',
    'beltrana@email.com',
    '$2a$12$403HVkfVSUbDioyciv9IC.oBlgMqudbnQL8ubebJIXScNs8E3jYe2',
    'NORMAL'
),-- tipo ADMIN e senha = astrodev99
(
    'u003',
    'Astrodev',
    'astrodev@email.com',
    '$2a$12$lHyD.hKs3JDGu2nIbBrxYujrnfIX5RW5oq/B41HCKf7TSaq9RgqJ.',
    'ADMIN'
);

SELECT * FROM users;

CREATE TABLE playlists (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    creator_id TEXT NOT NULL,
    name TEXT NOT NULL,
    likes INTEGER DEFAULT 0 NOT NULL,
    dislikes INTEGER DEFAULT 0 NOT NULL,
    updated_at TEXT DEFAULT (DATETIME()) NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);
DROP TABLE IF EXISTS playlists;
INSERT INTO
    playlists (
        creator_id,
        name,
        likes,
        dislikes
    )
VALUES
    (
        'u002',
        'ROCK',
        0,
        0
    ),
    (
        'u002',
        'POP',
        0,
        0
    ),
    (
        'u001',
        'JAZZ',
        0,
        0
        );


SELECT * FROM playlists;
DROP TABLE IF EXISTS likes_or_dislikes_playlists;
CREATE TABLE likes_or_dislikes_playlists (
    user_id TEXT NOT NULL,
    playlist_id TEXT NOT NULL,
    like_or_dislike INTEGER NOT NULL CHECK (like_or_dislike IN (1, 0)),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (playlist_id) REFERENCES playlists(id) ON DELETE CASCADE ON UPDATE CASCADE
);
DROP TABLE IF EXISTS likes_or_dislikes_playlists;
INSERT INTO
    likes_or_dislikes_playlists (
        user_id,
        playlist_id,
        like_or_dislike
    )
VALUES
    (
        'u002',
        'p001',
        1
    ),
    (
        'u003',
        'p001',
        0
    ),
    (
        'u003',
        'p001',
       1
    );


SELECT count(*) AS total_dislikes
FROM likes_or_dislikes_playlists
WHERE like_or_dislike = 0
  AND playlist_id = 'p001';
    
CREATE TABLE playlist_songs (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    playlist_id TEXT NOT NULL,
    song_id TEXT NOT NULL,
    FOREIGN KEY (playlist_id) REFERENCES playlists(id) ON DELETE CASCADE ON UPDATE CASCADE
);