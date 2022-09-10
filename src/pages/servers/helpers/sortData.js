export const sortAlphabetically = servers => 
    [ ...servers ].sort( ( { name: current }, { name: next } ) => 
        current.localeCompare( next ) )

export const sortNumerically = servers =>
    [ ...servers ].sort( ( { distance: current }, { distance: next } ) => 
        current - next )