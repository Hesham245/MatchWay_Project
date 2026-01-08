console.log("MatchWay loaded");

var stadiums = {
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

var teamCities = {
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
    var normalized = normalizeTeamName(teamName);
    for (var key in teamCities) {
        if (normalizeTeamName(key) === normalized) {
            return teamCities[key];
        }
    }
    return null;
}

function getStadium(teamName) {
    if (stadiums[teamName]) {
        return stadiums[teamName];
    }
    var normalized = normalizeTeamName(teamName);
    for (var key in stadiums) {
        if (normalizeTeamName(key) === normalized) {
            return stadiums[key];
        }
    }
    return 'Stadium TBA';
}

var hotels = {
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
    var months = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Sept': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    var cleanDate = dateStr.replace(/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday),\s*/i, '');
    var parts = cleanDate.match(/(\w+)\.?\s+(\d+),?\s+(\d+)/);
    if (parts) {
        var month = months[parts[1]];
        var day = parseInt(parts[2]);
        var year = parseInt(parts[3]);
        return new Date(year, month, day);
    }
    return null;
}

var fixtures = [
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

function fetchMatchData(club, city, startDate, endDate) {
    var clubInput = (club || '').trim();
    var cityInput = (city || '').trim();
    
    if (!clubInput && !cityInput) {
        throw new Error('Please enter a club name or city');
    }
    
    var minDate = new Date(2026, 0, 4);
    minDate.setHours(0, 0, 0, 0);
    
    var dateFilterStart = minDate;
    var dateFilterEnd = null;
    
    if (startDate) {
        var parsedStart = new Date(startDate);
        parsedStart.setHours(0, 0, 0, 0);
        if (parsedStart >= minDate) {
            dateFilterStart = parsedStart;
        }
    }
    
    if (endDate) {
        var parsedEnd = new Date(endDate);
        parsedEnd.setHours(23, 59, 59, 999);
        dateFilterEnd = parsedEnd;
    }
    
    var relevantFixtures = [];
    
    if (cityInput && !clubInput) {
        var cityNormalized = cityInput.toLowerCase().trim();
        relevantFixtures = [];
        for (var i = 0; i < fixtures.length; i++) {
            var fixture = fixtures[i];
            var fixtureCity = getCity(fixture.home);
            if (fixtureCity && fixtureCity.toLowerCase() === cityNormalized) {
                var matchDate = parseFixtureDate(fixture.date);
                if (matchDate && matchDate >= dateFilterStart) {
                    if (!dateFilterEnd || matchDate <= dateFilterEnd) {
                        var fixtureObj = {
                            date: fixture.date,
                            time: fixture.time,
                            home: fixture.home,
                            away: fixture.away,
                            matchDate: matchDate,
                            city: fixtureCity,
                            isHome: false,
                            opponent: null
                        };
                        relevantFixtures.push(fixtureObj);
                    }
                }
            }
        }
        relevantFixtures.sort(function(a, b) {
            return a.matchDate - b.matchDate;
        });
        
        if (relevantFixtures.length > 1) {
            return {
                multipleMatches: true,
                city: cityInput,
                fixtures: relevantFixtures
            };
        }
        
        if (relevantFixtures.length === 0) {
            throw new Error('No matches available in "' + cityInput + '" for the selected date range.');
        }
    } else {
        var clubNormalized = normalizeTeamName(clubInput);
        relevantFixtures = [];
        for (var j = 0; j < fixtures.length; j++) {
            var fixture2 = fixtures[j];
            var homeNormalized = normalizeTeamName(fixture2.home);
            var awayNormalized = normalizeTeamName(fixture2.away);
            var isHome = homeNormalized === clubNormalized || 
                          fixture2.home.toLowerCase().indexOf(clubNormalized) !== -1 ||
                          clubNormalized.indexOf(homeNormalized) !== -1;
            var isAway = awayNormalized === clubNormalized ||
                          fixture2.away.toLowerCase().indexOf(clubNormalized) !== -1 ||
                          clubNormalized.indexOf(awayNormalized) !== -1;
            
            if (isHome || isAway) {
                var matchDate2 = parseFixtureDate(fixture2.date);
                if (matchDate2 && matchDate2 >= dateFilterStart) {
                    if (!dateFilterEnd || matchDate2 <= dateFilterEnd) {
                        var fixtureCity2 = getCity(fixture2.home);
                        var fixtureObj2 = {
                            date: fixture2.date,
                            time: fixture2.time,
                            home: fixture2.home,
                            away: fixture2.away,
                            matchDate: matchDate2,
                            city: fixtureCity2,
                            isHome: isHome,
                            opponent: isHome ? fixture2.away : fixture2.home
                        };
                        relevantFixtures.push(fixtureObj2);
                    }
                }
            }
        }
        relevantFixtures.sort(function(a, b) {
            return a.matchDate - b.matchDate;
        });
        
        if (relevantFixtures.length === 0) {
            throw new Error('No matches available for "' + clubInput + '" in the selected date range.');
        }
        
        if (relevantFixtures.length > 1) {
            return {
                multipleMatches: true,
                club: clubInput,
                fixtures: relevantFixtures
            };
        }
    }
    
    var nextFixture = relevantFixtures[0];
    
    if (cityInput && !clubInput && nextFixture.isHome === false) {
        nextFixture.isHome = true;
        nextFixture.opponent = nextFixture.away;
    }
    
    var hotelInfo = null;
    if (cityInput && !clubInput) {
        var homeTeam = nextFixture.home;
        hotelInfo = hotels[homeTeam] || hotels[normalizeTeamName(homeTeam)];
    } else if (nextFixture.isHome) {
        var homeTeam2 = nextFixture.home;
        hotelInfo = hotels[homeTeam2] || hotels[normalizeTeamName(homeTeam2)];
    } else {
        var opponent = nextFixture.opponent;
        hotelInfo = hotels[opponent] || hotels[normalizeTeamName(opponent)];
    }
    
    var formattedDate = nextFixture.matchDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    var stadium = getStadium(nextFixture.home);
    
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
    var resultsSection = document.getElementById('results-section');
    var resultsContent = document.getElementById('results-content');
    
    var formattedFixtures = [];
    for (var i = 0; i < matchData.fixtures.length; i++) {
        var fixture = matchData.fixtures[i];
        var formattedDate = fixture.matchDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        var stadium = getStadium(fixture.home);
        formattedFixtures.push({
            date: fixture.date,
            time: fixture.time,
            home: fixture.home,
            away: fixture.away,
            matchDate: fixture.matchDate,
            city: fixture.city,
            isHome: fixture.isHome,
            opponent: fixture.opponent,
            formattedDate: formattedDate,
            stadium: stadium
        });
    }
    
    var isCitySearch = matchData.city !== undefined;
    var searchTerm = isCitySearch ? matchData.city : matchData.club;
    var headerText = isCitySearch 
        ? 'Multiple Matches Found in ' + searchTerm
        : 'Multiple Matches Found for ' + searchTerm;
    
    var html = '<div class="match-card">';
    html += '<div class="match-header">';
    html += '<h3>' + headerText + '</h3>';
    html += '<p class="match-date">Please select a match:</p>';
    html += '</div>';
    html += '<div class="fixture-options">';
    
    for (var j = 0; j < formattedFixtures.length; j++) {
        var fixture2 = formattedFixtures[j];
        html += '<div class="fixture-option-card" data-fixture-index="' + j + '">';
        html += '<div class="fixture-option-content">';
        html += '<div>';
        html += '<p class="fixture-option-title">' + fixture2.home + ' vs ' + fixture2.away + '</p>';
        html += '<p class="fixture-option-date">' + fixture2.formattedDate;
        if (fixture2.time) {
            html += ' at ' + fixture2.time;
        }
        html += '</p>';
        html += '<p class="fixture-option-venue"><strong>Venue:</strong> ' + fixture2.stadium + '</p>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
    }
    
    html += '</div>';
    html += '</div>';
    
    resultsContent.innerHTML = html;
    
    var cards = document.querySelectorAll('.fixture-option-card');
    for (var k = 0; k < cards.length; k++) {
        (function(index) {
            cards[k].addEventListener('click', function() {
                for (var m = 0; m < cards.length; m++) {
                    cards[m].classList.remove('selected');
                }
                this.classList.add('selected');
                
                var selectedFixture = formattedFixtures[index];
                var isCitySearch2 = matchData.city !== undefined;
                var searchedTerm = isCitySearch2 ? matchData.city : matchData.club;
                
                var hotelInfo = null;
                var isHomeTeam = true;
                
                if (isCitySearch2) {
                    var homeTeam = selectedFixture.home;
                    hotelInfo = hotels[homeTeam] || hotels[normalizeTeamName(homeTeam)];
                    isHomeTeam = true;
                } else {
                    var clubNormalized = normalizeTeamName(searchedTerm);
                    var homeNormalized = normalizeTeamName(selectedFixture.home);
                    
                    isHomeTeam = homeNormalized === clubNormalized || 
                                selectedFixture.home.toLowerCase().indexOf(clubNormalized) !== -1 ||
                                clubNormalized.indexOf(homeNormalized) !== -1;
                    
                    if (isHomeTeam) {
                        var homeTeam2 = selectedFixture.home;
                        hotelInfo = hotels[homeTeam2] || hotels[normalizeTeamName(homeTeam2)];
                    } else {
                        var opponent = selectedFixture.home;
                        hotelInfo = hotels[opponent] || hotels[normalizeTeamName(opponent)];
                    }
                }
                
                var matchDataObj = {
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
        })(k);
    }
    
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function displayMatchResults(matchData) {
    var resultsSection = document.getElementById('results-section');
    var resultsContent = document.getElementById('results-content');
    
    if (!matchData) {
        resultsContent.innerHTML = '<p>No match data found. Please try again.</p>';
        resultsSection.style.display = 'block';
        return;
    }
    
    var timeDisplay = matchData.time && matchData.time !== 'TBA' 
        ? ' at ' + matchData.time 
        : '';
    
    var hotelOptions = [
        { name: 'Essential Stay', price: 120, image: 'images/Budget_Hotel.jpg' },
        { name: 'Comfort Stay', price: 180, image: 'images/modern hotel room interior.jpg' },
        { name: 'Premium Stay', price: 260, image: 'images/luxury hotel room interior.jpg' }
    ];
    
    var ticketOptions = [
        { name: 'Standard Seating', price: 75, image: 'images/football stadium upper tier seats.jpg' },
        { name: 'Lower Bowl Seating', price: 140, image: 'images/football stadium lower tier seats.jpg' },
        { name: 'Premium Seating', price: 220, image: 'images/football stadium VIP seats.jpg' }
    ];
    
    var html = '<div class="match-card">';
    html += '<div class="match-header">';
    html += '<h3>' + matchData.competition + '</h3>';
    html += '<p class="match-date">' + matchData.date + timeDisplay + '</p>';
    html += '</div>';
    html += '<div class="match-teams">';
    html += '<div class="team">';
    html += '<span class="team-name">' + matchData.homeTeam + '</span>';
    html += '<span class="vs">vs</span>';
    html += '<span class="team-name">' + matchData.awayTeam + '</span>';
    html += '</div>';
    html += '</div>';
    html += '<div class="match-venue">';
    html += '<p><strong>Venue:</strong> ' + matchData.venue + '</p>';
    html += '</div>';
    
    html += '<div class="options-section">';
    html += '<h4>Select Hotel</h4>';
    html += '<div class="options-grid">';
    for (var i = 0; i < hotelOptions.length; i++) {
        html += '<div class="option-card" data-type="hotel" data-index="' + i + '" data-price="' + hotelOptions[i].price + '">';
        html += '<img src="' + hotelOptions[i].image + '" alt="' + hotelOptions[i].name + '" onerror="this.src=\'images/Hotel.jpg\'">';
        html += '<p class="option-name">' + hotelOptions[i].name + '</p>';
        html += '<p class="option-price">£' + hotelOptions[i].price + '</p>';
        html += '</div>';
    }
    html += '</div>';
    html += '</div>';
    
    html += '<div class="options-section">';
    html += '<h4>Select Tickets</h4>';
    html += '<div class="options-grid">';
    for (var j = 0; j < ticketOptions.length; j++) {
        html += '<div class="option-card" data-type="ticket" data-index="' + j + '" data-price="' + ticketOptions[j].price + '">';
        html += '<img src="' + ticketOptions[j].image + '" alt="' + ticketOptions[j].name + '" onerror="this.src=\'images/Soccer Stadium.jpg\'">';
        html += '<p class="option-name">' + ticketOptions[j].name + '</p>';
        html += '<p class="option-price">£' + ticketOptions[j].price + '</p>';
        html += '</div>';
    }
    html += '</div>';
    html += '</div>';
    
    html += '<div class="total-section">';
    html += '<p>Total: <span id="total-price">£0</span></p>';
    html += '</div>';
    html += '</div>';
    
    resultsContent.innerHTML = html;
    
    var selectedHotel = null;
    var selectedTicket = null;
    
    function updateTotal() {
        var totalPrice = (selectedHotel || 0) + (selectedTicket || 0);
        var totalElement = document.getElementById('total-price');
        if (totalElement) {
            totalElement.textContent = '£' + totalPrice;
        }
    }
    
    var hotelCards = document.querySelectorAll('.option-card[data-type="hotel"]');
    for (var k = 0; k < hotelCards.length; k++) {
        hotelCards[k].addEventListener('click', function() {
            var allHotelCards = document.querySelectorAll('.option-card[data-type="hotel"]');
            for (var m = 0; m < allHotelCards.length; m++) {
                allHotelCards[m].classList.remove('selected');
            }
            this.classList.add('selected');
            selectedHotel = parseInt(this.getAttribute('data-price'));
            updateTotal();
        });
    }
    
    var ticketCards = document.querySelectorAll('.option-card[data-type="ticket"]');
    for (var n = 0; n < ticketCards.length; n++) {
        ticketCards[n].addEventListener('click', function() {
            var allTicketCards = document.querySelectorAll('.option-card[data-type="ticket"]');
            for (var p = 0; p < allTicketCards.length; p++) {
                allTicketCards[p].classList.remove('selected');
            }
            this.classList.add('selected');
            selectedTicket = parseInt(this.getAttribute('data-price'));
            updateTotal();
        });
    }
    
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.getElementById('search-button');
    
    searchButton.addEventListener('click', function() {
        var clubValue = document.getElementById('club-input').value.trim();
        var cityValue = document.getElementById('city-input').value.trim();
        var startDateValue = document.getElementById('start-date-input').value;
        var endDateValue = document.getElementById('end-date-input').value;
        
        if (startDateValue && endDateValue) {
            var startDate = new Date(startDateValue);
            var endDate = new Date(endDateValue);
            if (startDate > endDate) {
                var resultsSection = document.getElementById('results-section');
                var resultsContent = document.getElementById('results-content');
                resultsContent.innerHTML = '<p style="color: #d32f2f; text-align: center; padding: 20px;">Start date must be before or equal to end date.</p>';
                resultsSection.style.display = 'block';
                return;
            }
        }
        
        console.log('Club:', clubValue);
        console.log('City:', cityValue);
        console.log('Start Date:', startDateValue);
        console.log('End Date:', endDateValue);
        
        var resultsSection2 = document.getElementById('results-section');
        var resultsContent2 = document.getElementById('results-content');
        resultsContent2.innerHTML = '<p>Loading match data...</p>';
        resultsSection2.style.display = 'block';
        
        try {
            var matchData = fetchMatchData(clubValue, cityValue, startDateValue, endDateValue);
            
            if (matchData.multipleMatches) {
                displayFixtureOptions(matchData);
            } else {
                displayMatchResults(matchData);
            }
            
            console.log('Match Data:', matchData);
        } catch (error) {
            console.error('Error fetching match data:', error);
            var resultsContent3 = document.getElementById('results-content');
            resultsContent3.innerHTML = '<p style="color: #d32f2f; text-align: center; padding: 20px;">' + (error.message || 'Error loading match data. Please try again later.') + '</p>';
        }
    });
});
