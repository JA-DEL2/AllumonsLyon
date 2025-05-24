import React from "react";

interface ProfileCardProps {
    image: string;
    title: string;
    description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ image, title, description }) => {
    return (
        <div className="min-w-[200px] max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-400 p-6">
            <img className="w-full h-48 object-cover rounded-lg" src={image} alt={title} />
            <div className="mt-4 text-center">
                <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                <p className="mt-2 text-gray-700 text-justify">{description}</p>
            </div>
        </div>
    );
};

export default ProfileCard;

/*
Exemple d'utilisation :
<ProfileCard 
    image="https://upload.wikimedia.org/wikipedia/commons/c/cd/G%C3%A9rard_Depardieu_1993.jpg"
    title="Gerard Depardieu"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
/>
*/