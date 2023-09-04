export type Role = {
    role :string,
    username : string
}

export type User = {
    init : string,
    id : string,
    username : string,
    rank : number,
    is_ban : boolean,
    title : string,
    strike : number,
    points :number,
    is_joined_discord : boolean,
    created_at : Date,
    discord_id : string,
    github_id : string,
    Role_user : Array<Role>
}
export type WorkshopType = {
    id: string,
    fromDate: Date,
    toDate: Date,
    regDate: Date,
    is_completed: boolean,
    paid :boolean,
    type: "BYTECON",
    name: string,
    description: string,
    agenda: string,
    poster: string,
    register: string,
    take_away: string,
    Slots : Array<SlotType>
}

export type SlotType = {
    id : number ,
    max_count : number ,
    count : number ,
    work_id : string ,
    date : string,
    venue : string
}
