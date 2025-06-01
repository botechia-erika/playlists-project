export class Playlist {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private userId: string,
        private createdAt: Date
    ) {}

    public getId(): string {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }

    public getUserId(): string {
        return this.userId;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }
}