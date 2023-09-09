import characters from '../Data/characters.json';

export const CharacterGrid = () => {

    const createCard = (imageName, onClick, title) => {
        return (
            <button key={title} className="character" onClick={onClick}>
                <img src={require("../Images/Characters/" + imageName)} />
            </button>
        );
    };

    const group = characters.objects.map((object) => {
        return createCard(object.imageName, () => {}, object.title);
    });

    return (
        <div className="character-grid">
            {group}
        </div>
    );
}
