class Lecture {
    constructor(
        userId,
        previewImage,
        title,
        dateAdded,
        size,
        subject,
        section,
        createdBy,
    ) {
        this.userId = userId;
        this.previewImage = previewImage;
        this.title = title;
        this.dateAdded = dateAdded;
        this.size = size;
        this.subject = subject;
        this.section = section;
        this.createdBy = createdBy;
    }
}

export default Lecture;