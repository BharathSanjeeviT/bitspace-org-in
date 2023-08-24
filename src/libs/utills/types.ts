export type Rank = {
    rank : number,
    is_mod : boolean,
    is_super_mod : boolean,
    r_name : string,
    Users : Array<Users>
}

export type Role = {
    role :string,
    username : string
}

export type Users = {
    id :string,
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

