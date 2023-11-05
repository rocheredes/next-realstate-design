import React from 'react'

interface Props {
    classContainer?: string
}
const BlockquoteIcon = ({ classContainer }: Props) => {
    return (
        <svg className={classContainer} width="24" height="324" viewBox="0 0 60 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9606 0L0 37.2632H21.7241L30.1478 0H15.9606ZM45.8128 0L29.8522 37.2632H51.5764L60 0H45.8128Z" fill="#FFC700" fillOpacity="0.4" />
        </svg>
    )
}

export default BlockquoteIcon