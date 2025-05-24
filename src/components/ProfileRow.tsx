import React from "react";
import ProfileCard from "./ProfileCard"; // Assurez-vous que ce fichier existe

const ProfileRow: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex space-x-6">
                <ProfileCard 
                    image="https://upload.wikimedia.org/wikipedia/commons/c/cd/G%C3%A9rard_Depardieu_1993.jpg"
                    title="Alice Dupont"
                    description="Photographe et exploratrice urbaine."
                />
                <ProfileCard 
                    image="https://upload.wikimedia.org/wikipedia/commons/c/cd/G%C3%A9rard_Depardieu_1993.jpg"
                    title="Bob Martin"
                    description="Développeur web passionné de design minimaliste."
                />
                <ProfileCard 
                    image="https://upload.wikimedia.org/wikipedia/commons/c/cd/G%C3%A9rard_Depardieu_1993.jpg"
                    title="Charlie Roche"
                    description="Musicien et compositeur de bandes sonores."
                />
                <ProfileCard 
                    image="https://upload.wikimedia.org/wikipedia/commons/c/cd/G%C3%A9rard_Depardieu_1993.jpg"
                    title="Dana Levasseur"
                    description="Illustratrice et créatrice de mondes imaginaires."
                />
            </div>
        </div>
    );
};

export default ProfileRow;
