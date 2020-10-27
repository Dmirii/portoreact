export const getResourse =  async(url,options={}) => {
    const res =  await fetch(url,options);

    if(!res.ok){
        throw new Error (` Произошла ошибка ${res.status}`)
    }

    return await res.json();
};