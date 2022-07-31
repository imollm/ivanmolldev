type ProfileSoftSkillsContent = {
    value: string;
    description: string;
}

type ProfileHardSkillsContent = {
    value: string;
    icons: Array<string>;
}

export type ProfileInfo = {
    title: string;
    subtitle: string;
    content: string;
    footer: string;
}

export type ProfileSoftSkills = {
    title: string;
    subtitle: string;
    content: Array<ProfileSoftSkillsContent>;
    footer: string;
}

export type ProfileHardSkills = {
    title: string;
    subtitle: string;
    content: Array<ProfileHardSkillsContent>;
    footer: string;
}