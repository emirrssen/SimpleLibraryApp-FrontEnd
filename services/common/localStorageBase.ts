export async function getCurrentUserId(): Promise<number> {
    const id = await localStorage.getItem("current-user-id");

    if (id !== null) {
        return parseInt(id);
    }

    return 0;
}

export async function setCurrentUserId(id: number | null | undefined) {
    await localStorage.setItem("current-user-id", id+"");
}