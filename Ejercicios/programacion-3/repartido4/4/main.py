class Caballo
  def __init__(una_energia, una_raza):
    energia = una_energia
    raza = una_raza

  def comer(gramos):
    energia += gramos * 2

  def galopar(kms):
    energia -= kms
