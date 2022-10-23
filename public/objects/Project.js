/**
 * Hold the details of a Project
 * 
 */
class Project{
    /**
     * 
     * @param {string} title "Title of the project"
     * @param {string} keyword "Keyword used for class names, key in key-value pair"
     * @param {Array of strings} imgs "Images for the slideshow"
     * @param {Array of strings} imgCaptions "Captions for the images"
     * @param {string} projectDesc "Description of the project"
     * @param {string} webLink "Link to the web site"
     * @param {string} gitLink "Link to the github repository"
     */
    constructor(title,keyword,imgs,imgCaptions,projectDesc,webLink,gitLink){
        this.title = title;
        this.keyword = keyword;
        this.images = imgs;
        this.imageCaptions = imgCaptions;
        this.projectDescription = projectDesc;
        this.websiteLink = webLink;
        this.githubLink = gitLink;
    }
}