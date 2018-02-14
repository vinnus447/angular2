export class viewHistoryDetails {
    public Attachments: string;
    public Incident: string;
    public IncidentType: string;
    public Agency: string;
    public IncidentStatus: string;
    public DateOccurred: string;

   

    constructor(Attachments, Incident, IncidentType, Agency, IncidentStatus, DateOccurred) {

        this.Attachments = Attachments;
        this.Incident = Incident;
        this.IncidentType = IncidentType;
        this.Agency = Agency;
        this.IncidentStatus = IncidentStatus;
        this.DateOccurred = DateOccurred;
    }
}