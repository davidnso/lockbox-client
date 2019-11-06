export interface ticketInfo{
  requesterId: string;
  details: string;
  buildingId: string;
  begin: Number;
  end: Number;
}


export class Ticket{
    details: any
    buildingId: any
    begin: any
    end: any
    requesterId: any
    constructor(info:ticketInfo){
        this.details = info.details;
        this.buildingId = info.buildingId;
        this.begin = info.begin;
        this.end = info.end;
        this.requesterId = info.requesterId;
    }
}