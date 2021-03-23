export type QueryContainer = SearchQueryContainer | ExchangeQueryContainer;

export interface SearchQueryContainer {
    query: SearchQuery;
    sort?: Sort | StatSort;
}

export interface SearchQuery {
    status?: Option;
    name?: string;
    type?: string;
    stats?: StatFilter[];
    filters?: QueryFilters;
    term?: string;
}

export interface ExchangeQueryContainer {
    exchange: ExchangeQuery;
}

export interface ExchangeQuery {
    status: Option;
    have: string[];
    want: string[];
    minimum?: number;
    account?: string;
    fulfillable?: null;
}

export interface Range {
    min?: number;
    max?: number;
}

export interface Price extends Range {
    option: string;
}

export interface Sort {
    price?: string;
    indexed?: string;
}

export interface StatSort {
    [stat: string]: string;
}

export interface Option {
    option: string;
}

export interface BooleanOption {
    option: boolean;
}

export interface QueryFilters {
    type_filters?: TypeFiltersContainer;
    weapon_filters?: WeaponFiltersContainer;
    armour_filters?: ArmourFiltersContainer;
    socket_filters?: SocketFiltersContainer;
    req_filters?: ReqFiltersContainer;
    map_filters?: MapFiltersContainer;
    heist_filters?: HeistFiltersContainer;
    misc_filters?: MiscFiltersContainer;
    trade_filters?: TradeFiltersContainer;
}

export interface ArmourFiltersContainer {
    disabled: boolean;
    filters: ArmourFilters;
}

export interface ArmourFilters {
    ar?: Range;
    es?: Range;
    ev?: Range;
    block?: Range;
}

export interface HeistFiltersContainer {
    disabled: boolean;
    filters: HeistFilters;
}

export interface HeistFilters {
    heist_wings?: Range;
    heist_escape_routes?: Range;
    heist_reward_rooms?: Range;
    heist_lockpicking?: Range;
    heist_perception?: Range;
    heist_counter_thaumaturgy?: Range;
    heist_agility?: Range;
    heist_engineering?: Range;
    heist_deception?: Range;
    heist_trap_disarmament?: Range;
    heist_demolition?: Range;
    heist_brute_force?: Range;
    area_level?: Range;
    heist_max_reward_rooms?: Range;
    heist_max_escape_routes?: Range;
    heist_max_wings?: Range;
    heist_objective_value?: Option;
}

export interface MapFiltersContainer {
    disabled: boolean;
    filters: MapFilters;
}

export interface MapFilters {
    map_tier?: Range;
    map_iiq?: Range;
    map_packsize?: Range;
    map_iir?: Range;
    map_shaped?: BooleanOption | Option;
    map_blighted?: BooleanOption | Option;
    map_elder?: BooleanOption | Option;
    map_region?: BooleanOption | Option;
    map_series?: Option;
}

export interface MiscFiltersContainer {
    disabled: boolean;
    filters: MiscFilters;
}

export interface MiscFilters {
    quality?: Range;
    gem_level?: Range;
    gem_level_progress?: Range;
    ilvl?: Range;
    gem_alternate_quality?: Option;
    shaper_item?: BooleanOption | Option;
    crusader_item?: BooleanOption | Option;
    hunter_item?: BooleanOption | Option;
    elder_item?: BooleanOption | Option;
    redeemer_item?: BooleanOption | Option;
    warlord_item?: BooleanOption | Option;
    synthesised_item?: BooleanOption | Option;
    identified?: BooleanOption | Option;
    mirrored?: BooleanOption | Option;
    veiled?: BooleanOption | Option;
    fractured_item?: BooleanOption | Option;
    alternate_art?: BooleanOption | Option;
    corrupted?: BooleanOption | Option;
    crafted?: BooleanOption | Option;
    enchanted?: BooleanOption | Option;
    stored_experience?: Range;
    stack_size?: Range;
    talisman_tier?: Range;
}

export interface ReqFiltersContainer {
    disabled: boolean;
    filters: ReqFilters;
}

export interface ReqFilters {
    lvl?: Range;
    dex?: Range;
    int?: Range;
    str?: Range;
}

export interface SocketFiltersContainer {
    disabled: boolean;
    filters: SocketFilters;
}

export interface SocketFilters {
    sockets?: Sockets;
    links?: Sockets;
}

export interface Sockets {
    r?: number;
    g?: number;
    b?: number;
    w?: number;
    min?: number;
    max?: number;
}

export interface TradeFiltersContainer {
    disabled: boolean;
    filters: TradeFilters;
}

export interface TradeFilters {
    account?: {
        input: string;
    };
    indexed?: Option;
    price?: Price;
}

export interface TypeFiltersContainer {
    disabled: boolean;
    filters: TypeFilters;
}

export interface TypeFilters {
    category: Option;
    rarity: Option;
}

export interface WeaponFiltersContainer {
    disabled: boolean;
    filters: WeaponFilters;
}

export interface WeaponFilters {
    damage: Range;
    aps: Range;
    dps: Range;
    edps: Range;
    pdps: Range;
    crit: Range;
}

export interface StatFilter {
    type: string;
    filters: Stat[];
    value?: Range;
    disabled?: boolean;
}

export interface Stat {
    id: string;
    value: Range;
    disabled: boolean;
}
