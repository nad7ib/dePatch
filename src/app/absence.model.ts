export class AbsenceModel {
    public name : string;
    public startday : Date;
    public endday : Date;

    constructor(name: string = null, startday:Date = null, enddate : Date = null)  {
        this.name = name;
        this.startday = startday;
        this.endday = enddate;
    }
}