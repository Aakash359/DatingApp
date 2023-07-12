import React from "react";
import { FilterAllItemsIcon, FilterCommentItemsIcon, FilterGiftItemIcon, FilterHeartItemsIcon, NavHeartIcon } from "../assets";
import { Filter } from "../screens";

export const likesFilterData = [
    {
        text: Filter.ALL,
        icon: <FilterAllItemsIcon />
    },
    {
        text: Filter.GIFTS,
        icon: <FilterGiftItemIcon />
    },
    {
        text: Filter.LIKES,
        icon: <FilterHeartItemsIcon />
    },
    {
        text: Filter.COMMENTS,
        icon: <FilterCommentItemsIcon />
    },
]