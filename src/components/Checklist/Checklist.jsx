import { useState } from "react";
import { ChecklistContent, ChecklistContainer, ChecklistActions } from "./ChecklistStyles";


export const Checklist = () => {
    return (
        <>
            <ChecklistContainer>
                <h1>CheckList</h1>
                <ChecklistContent>
                    <ChecklistActions></ChecklistActions>
                </ChecklistContent>
            </ChecklistContainer>
        </>
    )
}