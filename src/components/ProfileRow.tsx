import React from "react";
import ProfileCard from "./ProfileCard";

const ProfileRow: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-[75vh] mb-12">
            <div className="flex flex-wrap justify-center gap-6">
                <ProfileCard 
                    image="https://www.programme-tv.net/imgre/fit/~2~providerPerson~aa4ab08b7f1952d7.jpeg/300x300/quality/80/stephane-bern.jpeg"
                    title="Stéphane Bern"
                    description="Principalement connu pour son rôle d'animateur et d'historien du patrimoine, mais il a également fait quelques apparitions au cinéma et à la télévision. Il a joué dans des films et séries où son expertise historique et son charisme ont été mis en avant. Son émission phare, Secrets d'Histoire, diffusée depuis 2007, explore des figures historiques et des lieux emblématiques. Il a aussi participé à des productions télévisées et cinématographiques en tant qu'acteur ou consultant."
                />
                <ProfileCard 
                    image="https://www.alalyonnaise.fr/var/site/storage/images/_aliases/all_medium_width_1200/9/3/7/3/623739-1-fre-FR/EG-Alexandre-Astier-Kaamelott-SusieWaroude-17.jpg"
                    title="Alexandre Astier"
                    description="Acteur, réalisateur, scénariste et compositeur français, principalement connu pour avoir créé et interprété la série Kaamelott (2005-2009), qui revisite la légende arthurienne avec un ton humoristique et dramatique. Il a ensuite porté cet univers au cinéma avec Kaamelott : Premier Volet (2021) et prépare la suite. Il a également coréalisé les films d'animation Astérix : Le Domaine des dieux (2014) et Astérix : Le Secret de la potion magique (2018). Son œuvre se distingue par une écriture soignée, un humour subtil et une approche cinématographique qui mêle comédie et profondeur dramatique."
                />
                <ProfileCard 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3TTqH0xNFu9QnDAx4L-edfGko-zXjewcQAQ&s"
                    title="Mimie Mathy"
                    description="Actrice et humoriste française, principalement connue pour son rôle emblématique dans la série *Joséphine, ange gardien*, diffusée depuis 1997. Avant cela, elle s'est fait remarquer dans les années 1980 et 1990 au sein du trio comique *Les Filles*, aux côtés de Michèle Bernier et Isabelle de Botton. Elle a également participé à plusieurs productions télévisées et cinématographiques, consolidant son statut de figure incontournable du paysage audiovisuel français."
                />
                <ProfileCard 
                    image="https://www.fnactickets.com/static/0/visuel/300/344/FLORENCE-FORESTI_3440820574291092826.jpg"
                    title="Florence Foresti"
                    description="Humoriste et actrice française, a débuté au cinéma en 2006 avec Dikkenek, une comédie belge culte. Elle a ensuite enchaîné avec des rôles marquants dans Hollywoo (2011), Barbecue (2014) et De plus belle (2017), où elle incarne une femme confrontée à la maladie. Elle prête également sa voix à Bonnemine dans les films d'animation Astérix : Le Domaine des dieux (2014) et Astérix : Le Secret de la potion magique (2018). Son parcours cinématographique reflète son talent pour la comédie et son aisance à mêler humour et émotion."
                />
            </div>
        </div>
    );
};

export default ProfileRow;
