// Job Class Declaration

class Job {
    private company: string;
    private jobTitle: string;
    private city: string;
    private state: string;
    private dateApplied: Date;

    constructor(company:string, jobTitle: string, city: string, state: string, strDateApplied: string) {
        this.company = company;
        this.jobTitle = jobTitle;
        this.city = city;
        this.state = state;
        this.dateApplied = new Date(strDateApplied);
    }
}

export default Job;