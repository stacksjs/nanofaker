import type { Random } from '../random'

export class SportModule {
  constructor(private random: Random) {}

  /**
   * Generate a sport name
   * @example faker.sport.sport() // 'Basketball'
   */
  sport(): string {
    const sports = [
      'Football', 'Basketball', 'Baseball', 'Soccer', 'Tennis', 'Golf', 'Hockey', 'Boxing',
      'Wrestling', 'Swimming', 'Track and Field', 'Volleyball', 'Cricket', 'Rugby', 'Lacrosse',
      'Badminton', 'Table Tennis', 'Bowling', 'Skiing', 'Snowboarding', 'Surfing', 'Skateboarding',
      'Cycling', 'Running', 'Marathon', 'Triathlon', 'Gymnastics', 'Fencing', 'Archery',
      'Martial Arts', 'Karate', 'Judo', 'Taekwondo', 'MMA', 'Formula 1', 'NASCAR', 'Sailing',
    ]
    return this.random.arrayElement(sports)
  }

  /**
   * Generate a team name
   * @example faker.sport.team() // 'Lakers'
   */
  team(): string {
    const teams = [
      'Lakers', 'Warriors', 'Bulls', 'Celtics', 'Knicks', 'Heat', 'Spurs', 'Mavericks',
      'Yankees', 'Red Sox', 'Dodgers', 'Cubs', 'Giants', 'Astros', 'Braves', 'Phillies',
      'Patriots', '49ers', 'Cowboys', 'Packers', 'Steelers', 'Eagles', 'Seahawks', 'Chiefs',
      'Manchester United', 'Real Madrid', 'Barcelona', 'Liverpool', 'Bayern Munich', 'PSG',
      'Maple Leafs', 'Bruins', 'Canadiens', 'Blackhawks', 'Penguins', 'Lightning',
    ]
    return this.random.arrayElement(teams)
  }

  /**
   * Generate an athlete name
   * @example faker.sport.athlete() // 'Michael Jordan'
   */
  athlete(): string {
    const athletes = [
      'Michael Jordan', 'LeBron James', 'Tom Brady', 'Serena Williams', 'Tiger Woods',
      'Muhammad Ali', 'Babe Ruth', 'Wayne Gretzky', 'Pelé', 'Cristiano Ronaldo',
      'Lionel Messi', 'Roger Federer', 'Usain Bolt', 'Simone Biles', 'Michael Phelps',
      'Kobe Bryant', 'Derek Jeter', 'Joe Montana', 'Magic Johnson', 'Larry Bird',
    ]
    return this.random.arrayElement(athletes)
  }

  /**
   * Generate a position
   * @example faker.sport.position() // 'Quarterback'
   */
  position(): string {
    const positions = [
      'Quarterback', 'Running Back', 'Wide Receiver', 'Linebacker', 'Defensive Back',
      'Point Guard', 'Shooting Guard', 'Small Forward', 'Power Forward', 'Center',
      'Pitcher', 'Catcher', 'First Base', 'Shortstop', 'Outfielder',
      'Forward', 'Midfielder', 'Defender', 'Goalkeeper', 'Striker', 'Winger',
    ]
    return this.random.arrayElement(positions)
  }

  /**
   * Generate a sports event
   * @example faker.sport.event() // 'Super Bowl'
   */
  event(): string {
    const events = [
      'Super Bowl', 'World Series', 'NBA Finals', 'Stanley Cup', 'FIFA World Cup',
      'Olympics', 'Wimbledon', 'Masters Tournament', 'Kentucky Derby', 'Indianapolis 500',
      'Tour de France', 'Boston Marathon', 'UEFA Champions League', 'World Cup',
      'The Open Championship', 'US Open', 'French Open', 'Australian Open',
    ]
    return this.random.arrayElement(events)
  }

  /**
   * Generate a league/competition name
   * @example faker.sport.league() // 'NFL'
   */
  league(): string {
    const leagues = [
      'NFL', 'NBA', 'MLB', 'NHL', 'MLS', 'Premier League', 'La Liga', 'Serie A', 'Bundesliga',
      'Ligue 1', 'UEFA', 'FIFA', 'NCAA', 'PGA', 'ATP', 'WTA', 'F1', 'NASCAR', 'IndyCar',
    ]
    return this.random.arrayElement(leagues)
  }

  /**
   * Generate a sports quote
   * @example faker.sport.quote() // 'Just do it!'
   */
  quote(): string {
    const quotes = [
      'Just do it!',
      'Winners never quit and quitters never win.',
      'Hard work beats talent when talent doesn\'t work hard.',
      'The only way to prove you\'re a good sport is to lose.',
      'Champions keep playing until they get it right.',
      'It\'s not whether you get knocked down, it\'s whether you get up.',
      'You miss 100% of the shots you don\'t take.',
      'The difference between the impossible and the possible lies in determination.',
    ]
    return this.random.arrayElement(quotes)
  }

  /**
   * Generate equipment/gear
   * @example faker.sport.equipment() // 'Basketball'
   */
  equipment(): string {
    const equipment = [
      'Ball', 'Bat', 'Glove', 'Helmet', 'Racket', 'Puck', 'Skates', 'Cleats', 'Pads',
      'Jersey', 'Goggles', 'Swimsuit', 'Bicycle', 'Surfboard', 'Skateboard', 'Snowboard',
      'Skis', 'Golf Clubs', 'Tennis Racket', 'Boxing Gloves', 'Mouthguard',
    ]
    return this.random.arrayElement(equipment)
  }
}
