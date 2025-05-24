import React from "react";
import ProfileCard from "./ProfileCard";

const ProfileRow: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-[75vh] mb-12">
            <div className="flex flex-wrap justify-center gap-6">
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
