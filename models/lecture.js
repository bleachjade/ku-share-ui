class Lecture {
    constructor(
        userId,
        title,
        author,
        description,
        subject,
        section,
        professor,
        numberOfPages,
        thumbnail,
        filePath,
        slug,
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
        this.professor = professor;
        this.numberOfPages = numberOfPages;
        this.thumbnail = thumbnail;
        this.filePath = filePath;
        this.slug = slug;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.id = id;
    }
}

export default Lecture;