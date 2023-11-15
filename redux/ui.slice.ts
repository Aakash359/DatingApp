import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ConversationFooterModalPage {
    GIFT_OPTIONS_SCREEN = 'GIFT_OPTIONS_SCREEN',
    GIFT_INVENTORY_SCREEN = 'GIFT_INVENTORY_SCREEN',
    CONFIRM_GIFT_SCREEN = 'CONFIRM_GIFT_SCREEN',
    ASK_FOR_DATE_SCREEN = 'ASK_FOR_DATE_SCREEN',
    SELECT_LOCATION_SCREEN = 'SELECT_LOCATION_SCREEN',

    GIFT_DEDUCTION_SCREEN = 'GIFT_DEDUCTION_SCREEN',
    DATE_PROPOSAL_SENT_SCREEN = 'DATE_PROPOSAL_SENT_SCREEN',
    GIFT_SENT_SCREEN = 'GIFT_SENT_SCREEN',
}

interface UiState {
    conversationFooter: {
        isModalVisible: boolean,
        modalPage: ConversationFooterModalPage,
    }
}

const initialState: UiState = {
    conversationFooter: {
        isModalVisible: false,
        modalPage: ConversationFooterModalPage.GIFT_OPTIONS_SCREEN,
    }
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setConversationFooterModalVisibility: (state, action: PayloadAction<boolean>) => {
            state.conversationFooter.isModalVisible = action.payload;
        },

        setConversationFooterModalPage: (state, action: PayloadAction<ConversationFooterModalPage>) => {
            state.conversationFooter.modalPage = action.payload;
        }
    }
})

export const
    {
        setConversationFooterModalVisibility,
        setConversationFooterModalPage
} = uiSlice.actions;

export default uiSlice.reducer;