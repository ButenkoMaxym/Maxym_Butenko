function invitationRearrange(invitation) {
    if (invitation === "") return invitation;
    let result = "";
    let people = invitation.toUpperCase().split(";");

    for (let i = 0; i < people.length; i++)
    {
        let person = people[i].split(":");
        people[i] = person[1] + ", " + person[0];
    }
    people.sort()
    for (let person of people)
    {
        result += "(" + person + ")";
    }

    return result;
}

console.log(invitationRearrange("Fred:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));