console.log("MatchWay loaded");

const stadiums = {
    'Arsenal': 'Emirates Stadium',
    'Aston Villa': 'Villa Park',
    'AFC Bournemouth': 'Vitality Stadium',
    'Bournemouth': 'Vitality Stadium',
    'Brentford': 'Gtech Community Stadium',
    'Brighton': 'Amex Stadium',
    'Brighton & Hove Albion': 'Amex Stadium',
    'Burnley': 'Turf Moor',
    'Chelsea': 'Stamford Bridge',
    'Crystal Palace': 'Selhurst Park',
    'Everton': 'Goodison Park',
    'Fulham': 'Craven Cottage',
    'Liverpool': 'Anfield',
    'Luton Town': 'Kenilworth Road',
    'Manchester City': 'Etihad Stadium',
    'Man City': 'Etihad Stadium',
    'Manchester United': 'Old Trafford',
    'Man United': 'Old Trafford',
    'Newcastle United': 'St James\' Park',
    'Newcastle': 'St James\' Park',
    'Nottingham Forest': 'City Ground',
    'Nottm Forest': 'City Ground',
    'Sheffield United': 'Bramall Lane',
    'Tottenham Hotspur': 'Tottenham Hotspur Stadium',
    'Tottenham': 'Tottenham Hotspur Stadium',
    'West Ham United': 'London Stadium',
    'West Ham': 'London Stadium',
    'Wolverhampton Wanderers': 'Molineux Stadium',
    'Wolves': 'Molineux Stadium',
    'Leeds United': 'Elland Road',
    'Leeds': 'Elland Road',
    'Sunderland': 'Stadium of Light'
};

const teamCities = {
    'Arsenal': 'London',
    'Aston Villa': 'Birmingham',
    'AFC Bournemouth': 'Bournemouth',
    'Bournemouth': 'Bournemouth',
    'Brentford': 'London',
    'Brighton': 'Brighton',
    'Brighton & Hove Albion': 'Brighton',
    'Burnley': 'Burnley',
    'Chelsea': 'London',
    'Crystal Palace': 'London',
    'Everton': 'Liverpool',
    'Fulham': 'London',
    'Liverpool': 'Liverpool',
    'Luton Town': 'Luton',
    'Manchester City': 'Manchester',
    'Man City': 'Manchester',
    'Manchester United': 'Manchester',
    'Man United': 'Manchester',
    'Newcastle United': 'Newcastle',
    'Newcastle': 'Newcastle',
    'Nottingham Forest': 'Nottingham',
    'Nottm Forest': 'Nottingham',
    'Sheffield United': 'Sheffield',
    'Tottenham Hotspur': 'London',
    'Tottenham': 'London',
    'West Ham United': 'London',
    'West Ham': 'London',
    'Wolverhampton Wanderers': 'Wolverhampton',
    'Wolves': 'Wolverhampton',
    'Leeds United': 'Leeds',
    'Leeds': 'Leeds',
    'Sunderland': 'Sunderland'
};

function getCity(teamName) {
    if (teamCities[teamName]) {
        return teamCities[teamName];
    }
    const normalized = normalizeTeamName(teamName);
    for (const [key, value] of Object.entries(teamCities)) {
        if (normalizeTeamName(key) === normalized) {
            return value;
        }
    }
    return null;
}

function getStadium(teamName) {
    if (stadiums[teamName]) {
        return stadiums[teamName];
    }
    const normalized = normalizeTeamName(teamName);
    for (const [key, value] of Object.entries(stadiums)) {
        if (normalizeTeamName(key) === normalized) {
            return value;
        }
    }
    return 'Stadium TBA';
}

const hotels = {
    'Arsenal': { city: 'London', hotel: 'ibis London Emirates Stadium', tier: 'Budget' },
    'Aston Villa': { city: 'Birmingham', hotel: 'ibis Birmingham New Street Station', tier: 'Budget' },
    'AFC Bournemouth': { city: 'Bournemouth', hotel: 'ibis Styles Bournemouth', tier: 'Budget' },
    'Bournemouth': { city: 'Bournemouth', hotel: 'ibis Styles Bournemouth', tier: 'Budget' },
    'Brentford': { city: 'London', hotel: 'ibis London Heathrow Airport', tier: 'Budget' },
    'Brighton': { city: 'Brighton', hotel: 'ibis Brighton City Centre', tier: 'Budget' },
    'Brighton & Hove Albion': { city: 'Brighton', hotel: 'ibis Brighton City Centre', tier: 'Budget' },
    'Chelsea': { city: 'London', hotel: 'ibis London Earls Court', tier: 'Budget' },
    'Crystal Palace': { city: 'London', hotel: 'ibis London Sutton Point', tier: 'Budget' },
    'Everton': { city: 'Liverpool', hotel: 'ibis Liverpool Centre Albert Dock', tier: 'Budget' },
    'Fulham': { city: 'London', hotel: 'ibis London Hammersmith', tier: 'Budget' },
    'Leeds United': { city: 'Leeds', hotel: 'ibis Leeds Centre', tier: 'Budget' },
    'Leeds': { city: 'Leeds', hotel: 'ibis Leeds Centre', tier: 'Budget' },
    'Liverpool': { city: 'Liverpool', hotel: 'ibis Liverpool Centre Moorfields', tier: 'Budget' },
    'Manchester City': { city: 'Manchester', hotel: 'ibis Manchester Centre Portland Street', tier: 'Budget' },
    'Man City': { city: 'Manchester', hotel: 'ibis Manchester Centre Portland Street', tier: 'Budget' },
    'Manchester United': { city: 'Manchester', hotel: 'ibis Manchester Centre Princess Street', tier: 'Budget' },
    'Man United': { city: 'Manchester', hotel: 'ibis Manchester Centre Princess Street', tier: 'Budget' },
    'Newcastle United': { city: 'Newcastle', hotel: 'ibis Newcastle Centre', tier: 'Budget' },
    'Newcastle': { city: 'Newcastle', hotel: 'ibis Newcastle Centre', tier: 'Budget' },
    'Nottingham Forest': { city: 'Nottingham', hotel: 'ibis Nottingham Centre', tier: 'Budget' },
    'Nottm Forest': { city: 'Nottingham', hotel: 'ibis Nottingham Centre', tier: 'Budget' },
    'Sunderland': { city: 'Sunderland', hotel: 'ibis Sunderland Centre', tier: 'Budget' },
    'Tottenham Hotspur': { city: 'London', hotel: 'ibis London Tottenham Hale', tier: 'Budget' },
    'Tottenham': { city: 'London', hotel: 'ibis London Tottenham Hale', tier: 'Budget' },
    'West Ham United': { city: 'London', hotel: 'ibis London Stratford', tier: 'Budget' },
    'West Ham': { city: 'London', hotel: 'ibis London Stratford', tier: 'Budget' },
    'Wolverhampton Wanderers': { city: 'Wolverhampton', hotel: 'ibis Birmingham Dudley', tier: 'Budget' },
    'Wolves': { city: 'Wolverhampton', hotel: 'ibis Birmingham Dudley', tier: 'Budget' },
    'Burnley': { city: 'Burnley', hotel: 'ibis Burnley Centre', tier: 'Budget' }
};

function parseFixtureDate(dateStr) {
    const months = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Sept': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    let cleanDate = dateStr.replace(/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday),\s*/i, '');
    const parts = cleanDate.match(/(\w+)\.?\s+(\d+),?\s+(\d+)/);
    if (parts) {
        const month = months[parts[1]];
        const day = parseInt(parts[2]);
        const year = parseInt(parts[3]);
        return new Date(year, month, day);
    }
    return null;
}

const fixtures = [
    { date: 'Wednesday, Jan. 7, 2026', time: '15:00', home: 'AFC Bournemouth', away: 'Tottenham Hotspur' },
    { date: 'Wednesday, Jan. 7, 2026', time: '15:00', home: 'Arsenal', away: 'Liverpool' },
    { date: 'Wednesday, Jan. 7, 2026', time: '15:00', home: 'Brentford', away: 'Sunderland' },
    { date: 'Wednesday, Jan. 7, 2026', time: '15:00', home: 'Burnley', away: 'Manchester United' },
    { date: 'Wednesday, Jan. 7, 2026', time: '15:00', home: 'Crystal Palace', away: 'Aston Villa' },
    { date: 'Wednesday, Jan. 7, 2026', time: '15:00', home: 'Everton', away: 'Wolves' },
    { date: 'Wednesday, Jan. 7, 2026', time: '15:00', home: 'Fulham', away: 'Chelsea' },
    { date: 'Wednesday, Jan. 7, 2026', time: '15:00', home: 'Manchester City', away: 'Brighton' },
    { date: 'Wednesday, Jan. 7, 2026', time: '15:00', home: 'Newcastle United', away: 'Leeds United' },
    { date: 'Wednesday, Jan. 7, 2026', time: '15:00', home: 'West Ham United', away: 'Nottingham Forest' },
    { date: 'Saturday, Jan. 17, 2026', time: '15:00', home: 'Aston Villa', away: 'Everton' },
    { date: 'Saturday, Jan. 17, 2026', time: '15:00', home: 'Brighton', away: 'AFC Bournemouth' },
    { date: 'Saturday, Jan. 17, 2026', time: '15:00', home: 'Chelsea', away: 'Brentford' },
    { date: 'Saturday, Jan. 17, 2026', time: '15:00', home: 'Leeds United', away: 'Fulham' },
    { date: 'Saturday, Jan. 17, 2026', time: '15:00', home: 'Liverpool', away: 'Burnley' },
    { date: 'Saturday, Jan. 17, 2026', time: '15:00', home: 'Manchester United', away: 'Manchester City' },
    { date: 'Saturday, Jan. 17, 2026', time: '15:00', home: 'Nottingham Forest', away: 'Arsenal' },
    { date: 'Saturday, Jan. 17, 2026', time: '15:00', home: 'Sunderland', away: 'Crystal Palace' },
    { date: 'Saturday, Jan. 17, 2026', time: '15:00', home: 'Tottenham Hotspur', away: 'West Ham United' },
    { date: 'Saturday, Jan. 17, 2026', time: '15:00', home: 'Wolves', away: 'Newcastle United' },
    { date: 'Saturday, Jan. 24, 2026', time: '15:00', home: 'AFC Bournemouth', away: 'Liverpool' },
    { date: 'Saturday, Jan. 24, 2026', time: '15:00', home: 'Arsenal', away: 'Manchester United' },
    { date: 'Saturday, Jan. 24, 2026', time: '15:00', home: 'Brentford', away: 'Nottingham Forest' },
    { date: 'Saturday, Jan. 24, 2026', time: '15:00', home: 'Burnley', away: 'Tottenham Hotspur' },
    { date: 'Saturday, Jan. 24, 2026', time: '15:00', home: 'Crystal Palace', away: 'Chelsea' },
    { date: 'Saturday, Jan. 24, 2026', time: '15:00', home: 'Everton', away: 'Leeds United' },
    { date: 'Saturday, Jan. 24, 2026', time: '15:00', home: 'Fulham', away: 'Brighton' },
    { date: 'Saturday, Jan. 24, 2026', time: '15:00', home: 'Manchester City', away: 'Wolves' },
    { date: 'Saturday, Jan. 24, 2026', time: '15:00', home: 'Newcastle United', away: 'Aston Villa' },
    { date: 'Saturday, Jan. 24, 2026', time: '15:00', home: 'West Ham United', away: 'Sunderland' },
    { date: 'Saturday, Jan. 31, 2026', time: '15:00', home: 'Aston Villa', away: 'Brentford' },
    { date: 'Saturday, Jan. 31, 2026', time: '15:00', home: 'Brighton', away: 'Everton' },
    { date: 'Saturday, Jan. 31, 2026', time: '15:00', home: 'Chelsea', away: 'West Ham United' },
    { date: 'Saturday, Jan. 31, 2026', time: '15:00', home: 'Leeds United', away: 'Arsenal' },
    { date: 'Saturday, Jan. 31, 2026', time: '15:00', home: 'Liverpool', away: 'Newcastle United' },
    { date: 'Saturday, Jan. 31, 2026', time: '15:00', home: 'Manchester United', away: 'Fulham' },
    { date: 'Saturday, Jan. 31, 2026', time: '15:00', home: 'Nottingham Forest', away: 'Crystal Palace' },
    { date: 'Saturday, Jan. 31, 2026', time: '15:00', home: 'Sunderland', away: 'Burnley' },
    { date: 'Saturday, Jan. 31, 2026', time: '15:00', home: 'Tottenham Hotspur', away: 'Manchester City' },
    { date: 'Saturday, Jan. 31, 2026', time: '15:00', home: 'Wolves', away: 'AFC Bournemouth' },
    { date: 'Saturday, Feb. 7, 2026', time: '15:00', home: 'AFC Bournemouth', away: 'Aston Villa' },
    { date: 'Saturday, Feb. 7, 2026', time: '15:00', home: 'Arsenal', away: 'Sunderland' },
    { date: 'Saturday, Feb. 7, 2026', time: '15:00', home: 'Brighton', away: 'Crystal Palace' },
    { date: 'Saturday, Feb. 7, 2026', time: '15:00', home: 'Burnley', away: 'West Ham United' },
    { date: 'Saturday, Feb. 7, 2026', time: '15:00', home: 'Fulham', away: 'Everton' },
    { date: 'Saturday, Feb. 7, 2026', time: '15:00', home: 'Leeds United', away: 'Nottingham Forest' },
    { date: 'Saturday, Feb. 7, 2026', time: '15:00', home: 'Liverpool', away: 'Manchester City' },
    { date: 'Saturday, Feb. 7, 2026', time: '15:00', home: 'Manchester United', away: 'Tottenham Hotspur' },
    { date: 'Saturday, Feb. 7, 2026', time: '15:00', home: 'Newcastle United', away: 'Brentford' },
    { date: 'Saturday, Feb. 7, 2026', time: '15:00', home: 'Wolves', away: 'Chelsea' },
    { date: 'Wednesday, Feb. 11, 2026', time: '15:00', home: 'Aston Villa', away: 'Brighton' },
    { date: 'Wednesday, Feb. 11, 2026', time: '15:00', home: 'Brentford', away: 'Arsenal' },
    { date: 'Wednesday, Feb. 11, 2026', time: '15:00', home: 'Chelsea', away: 'Leeds United' },
    { date: 'Wednesday, Feb. 11, 2026', time: '15:00', home: 'Crystal Palace', away: 'Burnley' },
    { date: 'Wednesday, Feb. 11, 2026', time: '15:00', home: 'Everton', away: 'AFC Bournemouth' },
    { date: 'Wednesday, Feb. 11, 2026', time: '15:00', home: 'Manchester City', away: 'Fulham' },
    { date: 'Wednesday, Feb. 11, 2026', time: '15:00', home: 'Nottingham Forest', away: 'Wolves' },
    { date: 'Wednesday, Feb. 11, 2026', time: '15:00', home: 'Sunderland', away: 'Liverpool' },
    { date: 'Wednesday, Feb. 11, 2026', time: '15:00', home: 'Tottenham Hotspur', away: 'Newcastle United' },
    { date: 'Wednesday, Feb. 11, 2026', time: '15:00', home: 'West Ham United', away: 'Manchester United' },
    { date: 'Saturday, Feb. 21, 2026', time: '15:00', home: 'Aston Villa', away: 'Leeds United' },
    { date: 'Saturday, Feb. 21, 2026', time: '15:00', home: 'Brentford', away: 'Brighton' },
    { date: 'Saturday, Feb. 21, 2026', time: '15:00', home: 'Chelsea', away: 'Burnley' },
    { date: 'Saturday, Feb. 21, 2026', time: '15:00', home: 'Crystal Palace', away: 'Wolves' },
    { date: 'Saturday, Feb. 21, 2026', time: '15:00', home: 'Everton', away: 'Manchester United' },
    { date: 'Saturday, Feb. 21, 2026', time: '15:00', home: 'Manchester City', away: 'Newcastle United' },
    { date: 'Saturday, Feb. 21, 2026', time: '15:00', home: 'Nottingham Forest', away: 'Liverpool' },
    { date: 'Saturday, Feb. 21, 2026', time: '15:00', home: 'Sunderland', away: 'Fulham' },
    { date: 'Saturday, Feb. 21, 2026', time: '15:00', home: 'Tottenham Hotspur', away: 'Arsenal' },
    { date: 'Saturday, Feb. 21, 2026', time: '15:00', home: 'West Ham United', away: 'AFC Bournemouth' },
    { date: 'Saturday, Feb. 28, 2026', time: '15:00', home: 'AFC Bournemouth', away: 'Sunderland' },
    { date: 'Saturday, Feb. 28, 2026', time: '15:00', home: 'Arsenal', away: 'Chelsea' },
    { date: 'Saturday, Feb. 28, 2026', time: '15:00', home: 'Brighton', away: 'Nottingham Forest' },
    { date: 'Saturday, Feb. 28, 2026', time: '15:00', home: 'Burnley', away: 'Brentford' },
    { date: 'Saturday, Feb. 28, 2026', time: '15:00', home: 'Fulham', away: 'Tottenham Hotspur' },
    { date: 'Saturday, Feb. 28, 2026', time: '15:00', home: 'Leeds United', away: 'Manchester City' },
    { date: 'Saturday, Feb. 28, 2026', time: '15:00', home: 'Liverpool', away: 'West Ham United' },
    { date: 'Saturday, Feb. 28, 2026', time: '15:00', home: 'Manchester United', away: 'Crystal Palace' },
    { date: 'Saturday, Feb. 28, 2026', time: '15:00', home: 'Newcastle United', away: 'Everton' },
    { date: 'Saturday, Feb. 28, 2026', time: '15:00', home: 'Wolves', away: 'Aston Villa' },
    { date: 'Wednesday, March 4, 2026', time: '15:00', home: 'AFC Bournemouth', away: 'Brentford' },
    { date: 'Wednesday, March 4, 2026', time: '15:00', home: 'Aston Villa', away: 'Chelsea' },
    { date: 'Wednesday, March 4, 2026', time: '15:00', home: 'Brighton', away: 'Arsenal' },
    { date: 'Wednesday, March 4, 2026', time: '15:00', home: 'Everton', away: 'Burnley' },
    { date: 'Wednesday, March 4, 2026', time: '15:00', home: 'Fulham', away: 'West Ham United' },
    { date: 'Wednesday, March 4, 2026', time: '15:00', home: 'Leeds United', away: 'Sunderland' },
    { date: 'Wednesday, March 4, 2026', time: '15:00', home: 'Manchester City', away: 'Nottingham Forest' },
    { date: 'Wednesday, March 4, 2026', time: '15:00', home: 'Newcastle United', away: 'Manchester United' },
    { date: 'Wednesday, March 4, 2026', time: '15:00', home: 'Tottenham Hotspur', away: 'Crystal Palace' },
    { date: 'Wednesday, March 4, 2026', time: '15:00', home: 'Wolves', away: 'Liverpool' },
    { date: 'Saturday, March 14, 2026', time: '15:00', home: 'Arsenal', away: 'Everton' },
    { date: 'Saturday, March 14, 2026', time: '15:00', home: 'Brentford', away: 'Wolves' },
    { date: 'Saturday, March 14, 2026', time: '15:00', home: 'Burnley', away: 'AFC Bournemouth' },
    { date: 'Saturday, March 14, 2026', time: '15:00', home: 'Chelsea', away: 'Newcastle United' },
    { date: 'Saturday, March 14, 2026', time: '15:00', home: 'Crystal Palace', away: 'Leeds United' },
    { date: 'Saturday, March 14, 2026', time: '15:00', home: 'Liverpool', away: 'Tottenham Hotspur' },
    { date: 'Saturday, March 14, 2026', time: '15:00', home: 'Manchester United', away: 'Aston Villa' },
    { date: 'Saturday, March 14, 2026', time: '15:00', home: 'Nottingham Forest', away: 'Fulham' },
    { date: 'Saturday, March 14, 2026', time: '15:00', home: 'Sunderland', away: 'Brighton' },
    { date: 'Saturday, March 14, 2026', time: '15:00', home: 'West Ham United', away: 'Manchester City' },
    { date: 'Saturday, March 21, 2026', time: '15:00', home: 'AFC Bournemouth', away: 'Manchester United' },
    { date: 'Saturday, March 21, 2026', time: '15:00', home: 'Aston Villa', away: 'West Ham United' },
    { date: 'Saturday, March 21, 2026', time: '15:00', home: 'Brighton', away: 'Liverpool' },
    { date: 'Saturday, March 21, 2026', time: '15:00', home: 'Everton', away: 'Chelsea' },
    { date: 'Saturday, March 21, 2026', time: '15:00', home: 'Fulham', away: 'Burnley' },
    { date: 'Saturday, March 21, 2026', time: '15:00', home: 'Leeds United', away: 'Brentford' },
    { date: 'Saturday, March 21, 2026', time: '15:00', home: 'Manchester City', away: 'Crystal Palace' },
    { date: 'Saturday, March 21, 2026', time: '15:00', home: 'Newcastle United', away: 'Sunderland' },
    { date: 'Saturday, March 21, 2026', time: '15:00', home: 'Tottenham Hotspur', away: 'Nottingham Forest' },
    { date: 'Saturday, March 21, 2026', time: '15:00', home: 'Wolves', away: 'Arsenal' },
    { date: 'Saturday, April 11, 2026', time: '15:00', home: 'Arsenal', away: 'AFC Bournemouth' },
    { date: 'Saturday, April 11, 2026', time: '15:00', home: 'Brentford', away: 'Everton' },
    { date: 'Saturday, April 11, 2026', time: '15:00', home: 'Burnley', away: 'Brighton' },
    { date: 'Saturday, April 11, 2026', time: '15:00', home: 'Chelsea', away: 'Manchester City' },
    { date: 'Saturday, April 11, 2026', time: '15:00', home: 'Crystal Palace', away: 'Newcastle United' },
    { date: 'Saturday, April 11, 2026', time: '15:00', home: 'Liverpool', away: 'Fulham' },
    { date: 'Saturday, April 11, 2026', time: '15:00', home: 'Manchester United', away: 'Leeds United' },
    { date: 'Saturday, April 11, 2026', time: '15:00', home: 'Nottingham Forest', away: 'Aston Villa' },
    { date: 'Saturday, April 11, 2026', time: '15:00', home: 'Sunderland', away: 'Tottenham Hotspur' },
    { date: 'Saturday, April 11, 2026', time: '15:00', home: 'West Ham United', away: 'Wolves' },
    { date: 'Saturday, April 18, 2026', time: '15:00', home: 'Aston Villa', away: 'Sunderland' },
    { date: 'Saturday, April 18, 2026', time: '15:00', home: 'Brentford', away: 'Fulham' },
    { date: 'Saturday, April 18, 2026', time: '15:00', home: 'Chelsea', away: 'Manchester United' },
    { date: 'Saturday, April 18, 2026', time: '15:00', home: 'Crystal Palace', away: 'West Ham United' },
    { date: 'Saturday, April 18, 2026', time: '15:00', home: 'Everton', away: 'Liverpool' },
    { date: 'Saturday, April 18, 2026', time: '15:00', home: 'Leeds United', away: 'Wolves' },
    { date: 'Saturday, April 18, 2026', time: '15:00', home: 'Manchester City', away: 'Arsenal' },
    { date: 'Saturday, April 18, 2026', time: '15:00', home: 'Newcastle United', away: 'AFC Bournemouth' },
    { date: 'Saturday, April 18, 2026', time: '15:00', home: 'Nottingham Forest', away: 'Burnley' },
    { date: 'Saturday, April 18, 2026', time: '15:00', home: 'Tottenham Hotspur', away: 'Brighton' },
    { date: 'Saturday, April 25, 2026', time: '15:00', home: 'AFC Bournemouth', away: 'Leeds United' },
    { date: 'Saturday, April 25, 2026', time: '15:00', home: 'Arsenal', away: 'Newcastle United' },
    { date: 'Saturday, April 25, 2026', time: '15:00', home: 'Brighton', away: 'Chelsea' },
    { date: 'Saturday, April 25, 2026', time: '15:00', home: 'Burnley', away: 'Manchester City' },
    { date: 'Saturday, April 25, 2026', time: '15:00', home: 'Fulham', away: 'Aston Villa' },
    { date: 'Saturday, April 25, 2026', time: '15:00', home: 'Liverpool', away: 'Crystal Palace' },
    { date: 'Saturday, April 25, 2026', time: '15:00', home: 'Manchester United', away: 'Brentford' },
    { date: 'Saturday, April 25, 2026', time: '15:00', home: 'Sunderland', away: 'Nottingham Forest' },
    { date: 'Saturday, April 25, 2026', time: '15:00', home: 'West Ham United', away: 'Everton' },
    { date: 'Saturday, April 25, 2026', time: '15:00', home: 'Wolves', away: 'Tottenham Hotspur' },
    { date: 'Saturday, May 2, 2026', time: '15:00', home: 'AFC Bournemouth', away: 'Crystal Palace' },
    { date: 'Saturday, May 2, 2026', time: '15:00', home: 'Arsenal', away: 'Fulham' },
    { date: 'Saturday, May 2, 2026', time: '15:00', home: 'Aston Villa', away: 'Tottenham Hotspur' },
    { date: 'Saturday, May 2, 2026', time: '15:00', home: 'Brentford', away: 'West Ham United' },
    { date: 'Saturday, May 2, 2026', time: '15:00', home: 'Chelsea', away: 'Nottingham Forest' },
    { date: 'Saturday, May 2, 2026', time: '15:00', home: 'Everton', away: 'Manchester City' },
    { date: 'Saturday, May 2, 2026', time: '15:00', home: 'Leeds United', away: 'Burnley' },
    { date: 'Saturday, May 2, 2026', time: '15:00', home: 'Manchester United', away: 'Liverpool' },
    { date: 'Saturday, May 2, 2026', time: '15:00', home: 'Newcastle United', away: 'Brighton' },
    { date: 'Saturday, May 2, 2026', time: '15:00', home: 'Wolves', away: 'Sunderland' },
    { date: 'Saturday, May 9, 2026', time: '15:00', home: 'Brighton', away: 'Wolves' },
    { date: 'Saturday, May 9, 2026', time: '15:00', home: 'Burnley', away: 'Aston Villa' },
    { date: 'Saturday, May 9, 2026', time: '15:00', home: 'Crystal Palace', away: 'Everton' },
    { date: 'Saturday, May 9, 2026', time: '15:00', home: 'Fulham', away: 'AFC Bournemouth' },
    { date: 'Saturday, May 9, 2026', time: '15:00', home: 'Liverpool', away: 'Chelsea' },
    { date: 'Saturday, May 9, 2026', time: '15:00', home: 'Manchester City', away: 'Brentford' },
    { date: 'Saturday, May 9, 2026', time: '15:00', home: 'Nottingham Forest', away: 'Newcastle United' },
    { date: 'Saturday, May 9, 2026', time: '15:00', home: 'Sunderland', away: 'Manchester United' },
    { date: 'Saturday, May 9, 2026', time: '15:00', home: 'Tottenham Hotspur', away: 'Leeds United' },
    { date: 'Saturday, May 9, 2026', time: '15:00', home: 'West Ham United', away: 'Arsenal' },
    { date: 'Sunday, May 17, 2026', time: '15:00', home: 'AFC Bournemouth', away: 'Manchester City' },
    { date: 'Sunday, May 17, 2026', time: '15:00', home: 'Arsenal', away: 'Burnley' },
    { date: 'Sunday, May 17, 2026', time: '15:00', home: 'Aston Villa', away: 'Liverpool' },
    { date: 'Sunday, May 17, 2026', time: '15:00', home: 'Brentford', away: 'Crystal Palace' },
    { date: 'Sunday, May 17, 2026', time: '15:00', home: 'Chelsea', away: 'Tottenham Hotspur' },
    { date: 'Sunday, May 17, 2026', time: '15:00', home: 'Everton', away: 'Sunderland' },
    { date: 'Sunday, May 17, 2026', time: '15:00', home: 'Leeds United', away: 'Brighton' },
    { date: 'Sunday, May 17, 2026', time: '15:00', home: 'Manchester United', away: 'Nottingham Forest' },
    { date: 'Sunday, May 17, 2026', time: '15:00', home: 'Newcastle United', away: 'West Ham United' },
    { date: 'Sunday, May 17, 2026', time: '15:00', home: 'Wolves', away: 'Fulham' },
    { date: 'Sunday, May 24, 2026', time: '15:00', home: 'Brighton', away: 'Manchester United' },
    { date: 'Sunday, May 24, 2026', time: '15:00', home: 'Burnley', away: 'Wolves' },
    { date: 'Sunday, May 24, 2026', time: '15:00', home: 'Crystal Palace', away: 'Arsenal' },
    { date: 'Sunday, May 24, 2026', time: '15:00', home: 'Fulham', away: 'Newcastle United' },
    { date: 'Sunday, May 24, 2026', time: '15:00', home: 'Liverpool', away: 'Brentford' },
    { date: 'Sunday, May 24, 2026', time: '15:00', home: 'Manchester City', away: 'Aston Villa' },
    { date: 'Sunday, May 24, 2026', time: '15:00', home: 'Nottingham Forest', away: 'AFC Bournemouth' },
    { date: 'Sunday, May 24, 2026', time: '15:00', home: 'Sunderland', away: 'Chelsea' },
    { date: 'Sunday, May 24, 2026', time: '15:00', home: 'Tottenham Hotspur', away: 'Everton' },
    { date: 'Sunday, May 24, 2026', time: '15:00', home: 'West Ham United', away: 'Leeds United' }
];

function normalizeTeamName(name) {
    if (!name) return '';
    return name.trim().toLowerCase().replace(/\s+/g, ' ').replace(/&/g, 'and');
}

async function fetchMatchData(club, city, startDate, endDate) {
    const clubInput = (club || '').trim();
    const cityInput = (city || '').trim();
    
    if (!clubInput && !cityInput) {
        throw new Error('Please enter a club name or city');
    }
    
    const minDate = new Date(2026, 0, 4);
    minDate.setHours(0, 0, 0, 0);
    
    let dateFilterStart = minDate;
    let dateFilterEnd = null;
    
    if (startDate) {
        const parsedStart = new Date(startDate);
        parsedStart.setHours(0, 0, 0, 0);
        if (parsedStart >= minDate) {
            dateFilterStart = parsedStart;
        }
    }
    
    if (endDate) {
        const parsedEnd = new Date(endDate);
        parsedEnd.setHours(23, 59, 59, 999);
        dateFilterEnd = parsedEnd;
    }
    
    let relevantFixtures = [];
    
    if (cityInput && !clubInput) {
        const cityNormalized = cityInput.toLowerCase().trim();
        relevantFixtures = fixtures
            .map(fixture => {
                const fixtureCity = getCity(fixture.home);
                if (fixtureCity && fixtureCity.toLowerCase() === cityNormalized) {
                    const matchDate = parseFixtureDate(fixture.date);
                    return {
                        ...fixture,
                        matchDate: matchDate,
                        city: fixtureCity,
                        isHome: false,
                        opponent: null
                    };
                }
                return null;
            })
            .filter(f => f !== null)
            .filter(f => f.matchDate && f.matchDate >= dateFilterStart)
            .filter(f => !dateFilterEnd || f.matchDate <= dateFilterEnd)
            .sort((a, b) => a.matchDate - b.matchDate);
        
        if (relevantFixtures.length > 1) {
            return {
                multipleMatches: true,
                city: cityInput,
                fixtures: relevantFixtures
            };
        }
        
        if (relevantFixtures.length === 0) {
            throw new Error(`No matches available in "${cityInput}" for the selected date range.`);
        }
    } else {
        const clubNormalized = normalizeTeamName(clubInput);
        relevantFixtures = fixtures
            .map(fixture => {
                const homeNormalized = normalizeTeamName(fixture.home);
                const awayNormalized = normalizeTeamName(fixture.away);
                const isHome = homeNormalized === clubNormalized || 
                              fixture.home.toLowerCase().includes(clubNormalized) ||
                              clubNormalized.includes(homeNormalized);
                const isAway = awayNormalized === clubNormalized ||
                              fixture.away.toLowerCase().includes(clubNormalized) ||
                              clubNormalized.includes(awayNormalized);
                
                if (isHome || isAway) {
                    const matchDate = parseFixtureDate(fixture.date);
                    const fixtureCity = getCity(fixture.home);
                    return {
                        ...fixture,
                        matchDate: matchDate,
                        city: fixtureCity,
                        isHome: isHome,
                        opponent: isHome ? fixture.away : fixture.home
                    };
                }
                return null;
            })
            .filter(f => f !== null)
            .filter(f => f.matchDate && f.matchDate >= dateFilterStart)
            .filter(f => !dateFilterEnd || f.matchDate <= dateFilterEnd)
            .sort((a, b) => a.matchDate - b.matchDate);
        
        if (relevantFixtures.length === 0) {
            throw new Error(`No matches available for "${clubInput}" in the selected date range.`);
        }
        
        if (relevantFixtures.length > 1) {
            return {
                multipleMatches: true,
                club: clubInput,
                fixtures: relevantFixtures
            };
        }
    }
    
    const nextFixture = relevantFixtures[0];
    
    if (cityInput && !clubInput && nextFixture.isHome === false) {
        nextFixture.isHome = true;
        nextFixture.opponent = nextFixture.away;
    }
    
    let hotelInfo = null;
    if (cityInput && !clubInput) {
        const homeTeam = nextFixture.home;
        hotelInfo = hotels[homeTeam] || hotels[normalizeTeamName(homeTeam)];
    } else if (nextFixture.isHome) {
        const homeTeam = nextFixture.home;
        hotelInfo = hotels[homeTeam] || hotels[normalizeTeamName(homeTeam)];
    } else {
        const opponent = nextFixture.opponent;
        hotelInfo = hotels[opponent] || hotels[normalizeTeamName(opponent)];
    }
    
    const formattedDate = nextFixture.matchDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const stadium = getStadium(nextFixture.home);
    
    return {
        homeTeam: nextFixture.home,
        awayTeam: nextFixture.away,
        date: formattedDate,
        time: nextFixture.time || 'TBA',
        venue: stadium,
        city: nextFixture.city,
        competition: 'Premier League',
        searchedTeam: clubInput || cityInput,
        isHomeTeam: nextFixture.isHome !== undefined ? nextFixture.isHome : true,
        hotel: hotelInfo
    };
}

function displayFixtureOptions(matchData) {
    const resultsSection = document.getElementById('results-section');
    const resultsContent = document.getElementById('results-content');
    
    const formattedFixtures = matchData.fixtures.map(fixture => {
        const formattedDate = fixture.matchDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const stadium = getStadium(fixture.home);
        return {
            ...fixture,
            formattedDate: formattedDate,
            stadium: stadium
        };
    });
    
    const isCitySearch = matchData.city !== undefined;
    const searchTerm = isCitySearch ? matchData.city : matchData.club;
    const headerText = isCitySearch 
        ? `Multiple Matches Found in ${searchTerm}`
        : `Multiple Matches Found for ${searchTerm}`;
    
    resultsContent.innerHTML = `
        <div class="match-card">
            <div class="match-header">
                <h3>${headerText}</h3>
                <p class="match-date">Please select a match:</p>
            </div>
            <div class="fixture-options">
                ${formattedFixtures.map((fixture, index) => `
                    <div class="fixture-option-card" data-fixture-index="${index}">
                        <div class="fixture-option-content">
                            <div>
                                <p class="fixture-option-title">${fixture.home} vs ${fixture.away}</p>
                                <p class="fixture-option-date">${fixture.formattedDate}${fixture.time ? ' at ' + fixture.time : ''}</p>
                                <p class="fixture-option-venue"><strong>Venue:</strong> ${fixture.stadium}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    document.querySelectorAll('.fixture-option-card').forEach((card, index) => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.fixture-option-card').forEach(c => {
                c.classList.remove('selected');
            });
            
            this.classList.add('selected');
            
            const selectedFixture = formattedFixtures[index];
            const isCitySearch = matchData.city !== undefined;
            const searchedTerm = isCitySearch ? matchData.city : matchData.club;
            
            let hotelInfo = null;
            let isHomeTeam = true;
            
            if (isCitySearch) {
                const homeTeam = selectedFixture.home;
                hotelInfo = hotels[homeTeam] || hotels[normalizeTeamName(homeTeam)];
                isHomeTeam = true;
            } else {
                const clubNormalized = normalizeTeamName(searchedTerm);
                const homeNormalized = normalizeTeamName(selectedFixture.home);
                
                isHomeTeam = homeNormalized === clubNormalized || 
                            selectedFixture.home.toLowerCase().includes(clubNormalized) ||
                            clubNormalized.includes(homeNormalized);
                
                if (isHomeTeam) {
                    const homeTeam = selectedFixture.home;
                    hotelInfo = hotels[homeTeam] || hotels[normalizeTeamName(homeTeam)];
                } else {
                    const opponent = selectedFixture.home;
                    hotelInfo = hotels[opponent] || hotels[normalizeTeamName(opponent)];
                }
            }
            
            const matchDataObj = {
                homeTeam: selectedFixture.home,
                awayTeam: selectedFixture.away,
                date: selectedFixture.formattedDate,
                time: selectedFixture.time || 'TBA',
                venue: selectedFixture.stadium,
                city: selectedFixture.city,
                competition: 'Premier League',
                searchedTeam: searchedTerm,
                isHomeTeam: isHomeTeam,
                hotel: hotelInfo
            };
            
            displayMatchResults(matchDataObj);
        });
        
    });
    
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function displayMatchResults(matchData) {
    const resultsSection = document.getElementById('results-section');
    const resultsContent = document.getElementById('results-content');
    
    if (!matchData) {
        resultsContent.innerHTML = '<p>No match data found. Please try again.</p>';
        resultsSection.style.display = 'block';
        return;
    }
    
    const timeDisplay = matchData.time && matchData.time !== 'TBA' 
        ? ` at ${matchData.time}` 
        : '';
    
    const hotelOptions = [
        { name: 'Essential Stay', price: 120, image: 'images/Budget_Hotel.jpg' },
        { name: 'Comfort Stay', price: 180, image: 'images/modern hotel room interior.jpg' },
        { name: 'Premium Stay', price: 260, image: 'images/luxury hotel room interior.jpg' }
    ];
    
    const ticketOptions = [
        { name: 'Standard Seating', price: 75, image: 'images/football stadium upper tier seats.jpg' },
        { name: 'Lower Bowl Seating', price: 140, image: 'images/football stadium lower tier seats.jpg' },
        { name: 'Premium Seating', price: 220, image: 'images/football stadium VIP seats.jpg' }
    ];
    
    resultsContent.innerHTML = `
        <div class="match-card">
            <div class="match-header">
                <h3>${matchData.competition}</h3>
                <p class="match-date">${matchData.date}${timeDisplay}</p>
            </div>
            <div class="match-teams">
                <div class="team">
                    <span class="team-name">${matchData.homeTeam}</span>
                    <span class="vs">vs</span>
                    <span class="team-name">${matchData.awayTeam}</span>
                </div>
            </div>
            <div class="match-venue">
                <p><strong>Venue:</strong> ${matchData.venue}</p>
            </div>
            
            <div class="options-section">
                <h4>Select Hotel</h4>
                <div class="options-grid">
                    ${hotelOptions.map((hotel, index) => `
                        <div class="option-card" data-type="hotel" data-index="${index}" data-price="${hotel.price}">
                            <img src="${hotel.image}" alt="${hotel.name}" onerror="this.src='images/Hotel.jpg'">
                            <p class="option-name">${hotel.name}</p>
                            <p class="option-price">£${hotel.price}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="options-section">
                <h4>Select Tickets</h4>
                <div class="options-grid">
                    ${ticketOptions.map((ticket, index) => `
                        <div class="option-card" data-type="ticket" data-index="${index}" data-price="${ticket.price}">
                            <img src="${ticket.image}" alt="${ticket.name}" onerror="this.src='images/Soccer Stadium.jpg'">
                            <p class="option-name">${ticket.name}</p>
                            <p class="option-price">£${ticket.price}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="total-section">
                <p>Total: <span id="total-price">£0</span></p>
            </div>
        </div>
    `;
    
    let selectedHotel = null;
    let selectedTicket = null;
    
    function updateTotal() {
        const totalPrice = (selectedHotel || 0) + (selectedTicket || 0);
        const totalElement = document.getElementById('total-price');
        if (totalElement) {
            totalElement.textContent = `£${totalPrice}`;
        }
    }
    
    document.querySelectorAll('.option-card[data-type="hotel"]').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.option-card[data-type="hotel"]').forEach(c => {
                c.classList.remove('selected');
            });
            this.classList.add('selected');
            selectedHotel = parseInt(this.getAttribute('data-price'));
            updateTotal();
        });
    });
    
    document.querySelectorAll('.option-card[data-type="ticket"]').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.option-card[data-type="ticket"]').forEach(c => {
                c.classList.remove('selected');
            });
            this.classList.add('selected');
            selectedTicket = parseInt(this.getAttribute('data-price'));
            updateTotal();
        });
    });
    
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    
    searchButton.addEventListener('click', async function() {
        const clubValue = document.getElementById('club-input').value.trim();
        const cityValue = document.getElementById('city-input').value.trim();
        const startDateValue = document.getElementById('start-date-input').value;
        const endDateValue = document.getElementById('end-date-input').value;
        
        if (startDateValue && endDateValue) {
            const startDate = new Date(startDateValue);
            const endDate = new Date(endDateValue);
            if (startDate > endDate) {
                const resultsSection = document.getElementById('results-section');
                const resultsContent = document.getElementById('results-content');
                resultsContent.innerHTML = `<p style="color: #d32f2f; text-align: center; padding: 20px;">Start date must be before or equal to end date.</p>`;
                resultsSection.style.display = 'block';
                return;
            }
        }
        
        console.log('Club:', clubValue);
        console.log('City:', cityValue);
        console.log('Start Date:', startDateValue);
        console.log('End Date:', endDateValue);
        
        const resultsSection = document.getElementById('results-section');
        const resultsContent = document.getElementById('results-content');
        resultsContent.innerHTML = '<p>Loading match data...</p>';
        resultsSection.style.display = 'block';
        
        try {
            const matchData = await fetchMatchData(clubValue, cityValue, startDateValue, endDateValue);
            
            if (matchData.multipleMatches) {
                displayFixtureOptions(matchData);
            } else {
                displayMatchResults(matchData);
            }
            
            console.log('Match Data:', matchData);
        } catch (error) {
            console.error('Error fetching match data:', error);
            resultsContent.innerHTML = `<p style="color: #d32f2f; text-align: center; padding: 20px;">${error.message || 'Error loading match data. Please try again later.'}</p>`;
        }
    });
});
