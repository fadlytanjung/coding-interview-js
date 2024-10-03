def bubble_sort_teams(teams):
    n = len(teams)
    
    # Perform Bubble Sort
    for i in range(n):
        for j in range(0, n - i - 1):
            # Compare by score first (descending)
            if teams[j]['score'] < teams[j + 1]['score']:
                teams[j], teams[j + 1] = teams[j + 1], teams[j]
            # If scores are equal, compare by name (ascending)
            elif teams[j]['score'] == teams[j + 1]['score'] and teams[j]['name'] > teams[j + 1]['name']:
                teams[j], teams[j + 1] = teams[j + 1], teams[j]

# Example usage:
teams = [
    {"name": "TeamA", "score": 50},
    {"name": "TeamB", "score": 60},
    {"name": "TeamC", "score": 50},
    {"name": "TeamD", "score": 70}
]

bubble_sort_teams(teams)
print(teams)