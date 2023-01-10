import React, { Dispatch, SetStateAction } from 'react'

export interface SearchFormProps extends React.HTMLAttributes<HTMLFormElement> {
  setShowSearchField?: Dispatch<SetStateAction<boolean>>
}
