export interface ContributionDay {
    contributionCount: number;
    date: string;
}

export interface ContributionWeek {
    contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
    totalContributions: number;
    weeks: ContributionWeek[];
}

const QUERY = `
  query($userName: String!) {
    user(login: $userName) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

export async function fetchGitHubContributions(
    username: string
): Promise<ContributionCalendar | null> {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
        console.warn('GITHUB_TOKEN is not set — skipping contribution fetch');
        return null;
    }

    try {
        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `bearer ${token}`,
            },
            body: JSON.stringify({ query: QUERY, variables: { userName: username } }),
        });

        if (!response.ok) {
            throw new Error(`GitHub API responded with ${response.status}`);
        }

        const json = await response.json();
        return json.data.user.contributionsCollection.contributionCalendar as ContributionCalendar;
    } catch (error) {
        console.error('Failed to fetch GitHub contributions:', error);
        return null;
    }
}
