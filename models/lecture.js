class Lecture {
    constructor(
        userId, //front (getState() in action)
        title, //front
        author, //front
        description, //front
        subject, //front
        section, //front
        thumbnail, //back
        filePath, //back
        slug, //front
        createdAt,
        updatedAt,
        id
    ) {
        this.userId = userId;
        this.title = title;
        this.author = author;
        this.description = description;
        this.subject = subject;
        this.section = section;
        this.thumbnail = thumbnail;
        this.filePath = filePath;
        this.slug = slug;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.id = id;
    }
}

export default Lecture;