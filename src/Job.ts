// Job Class Declaration

class Job {
    private _company: string;
    private _jobTitle: string;
    private _city: string;
    private _state: string;
    private _dateApplied: string;

    constructor(company:string, jobTitle: string, city: string, state: string, dateApplied: string) {
        this._company = company;
        this._jobTitle = jobTitle;
        this._city = city;
        this._state = state;
        this._dateApplied = dateApplied;
    }

    get company() {
        return this._company;
    }

    get jobTitle() {
        return this._jobTitle;
    }

    get city() {
        return this._city;
    }

    get state() {
        return this._state;
    }

    get dateApplied() {
        return this._dateApplied;
    }

}

export default Job;