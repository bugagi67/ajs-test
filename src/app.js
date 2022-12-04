export default function showHealth(args) {
  if (args.health < 15 && args.health > 0) {
    return 'critical';
  } if (args.health <= 50 && args.health >= 15) {
    return 'wounded';
  } if (args.health > 50) {
    return 'healthy';
  }
  return 'is dead';
}
