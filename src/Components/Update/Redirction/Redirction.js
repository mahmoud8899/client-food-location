


// profile user
export const TheProfile = (history, form) => {

    return form ? history.push(`/sw/restaurants/admin/`) : history.push(`/sw/profil/personal/`)
}

// profile user
export const LikePage = (history) => {

    return history.push(`/sw/personal/like/`)
}