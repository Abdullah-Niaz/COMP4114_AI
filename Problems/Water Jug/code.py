from collections import deque

# Function to represent the Water Jug Problem


def water_jug_bfs(jugA, jugB, jugC, start, goal):
    visited = set()
    queue = deque([start])  # Start with initial state
    parent = {start: None}  # To track path

    while queue:
        current = queue.popleft()

        # If goal state reached
        if current == goal:
            path = []
            while current:
                path.append(current)
                current = parent[current]
            path.reverse()
            return path

        if current in visited:
            continue
        visited.add(current)

        a, b, c = current
        next_states = []

        # All possible pour actions:
        # Pour from A to B
        pour = min(a, jugB - b)
        next_states.append((a - pour, b + pour, c))

        # Pour from A to C
        pour = min(a, jugC - c)
        next_states.append((a - pour, b, c + pour))

        # Pour from B to A
        pour = min(b, jugA - a)
        next_states.append((a + pour, b - pour, c))

        # Pour from B to C
        pour = min(b, jugC - c)
        next_states.append((a, b - pour, c + pour))

        # Pour from C to A
        pour = min(c, jugA - a)
        next_states.append((a + pour, b, c - pour))

        # Pour from C to B
        pour = min(c, jugB - b)
        next_states.append((a, b + pour, c - pour))

        for state in next_states:
            if state not in visited:
                parent[state] = current
                queue.append(state)

    return None  # If no solution


# Define jug capacities and initial/goal states
jugA, jugB, jugC = 8, 5, 3
start = (6, 2, 0)
goal = (1, 4, 3)

# Solve
path = water_jug_bfs(jugA, jugB, jugC, start, goal)

# Display results
if path:
    print("✅ Path to goal state:")
    for step in path:
        print(step)
else:
    print("❌ No solution found.")
